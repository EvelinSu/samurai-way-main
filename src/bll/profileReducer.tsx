import {TAppDispatch} from "./store/store";
import {defaultProfile} from "./demo/profileDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../dal/api/authApi";
import {setAppMessage, setIsFetching} from "./appReducer";
import {TActiveProfileResponse, TProfileImageResponse} from "../dal/api/types";
import {profileAPI} from "../dal/api/profileApi";

export const getProfile = (userId: number) => async (dispatch: TAppDispatch) => {
    dispatch(profileToggleLoader(true))
    try {
        const accountId = await authAPI.getAccountData().then((res) => res.data.id)
        const userStatus = await profileAPI.getProfileStatus(userId || accountId)
        const profile = await profileAPI.getProfile(userId || accountId)
        dispatch(setActiveProfile(profile))
        dispatch(setMyStatus(userStatus))
    } catch {
        dispatch(setAppMessage({text: "Something went wrong", severity: "error"}))
    } finally {
        dispatch(profileToggleLoader(false))
    }
}

export const changeProfile = (values: TActiveProfileResponse) => async (dispatch: TAppDispatch) => {
    dispatch(profileToggleLoader(true))
    try {
        const newProfile = await profileAPI.putProfile(values)
        if (newProfile.resultCode === 0) {
            dispatch(setProfile(newProfile.data))
            dispatch(setAppMessage({severity: "success", text: "Profile changed!"}))
        } else {
            throw new Error(newProfile.messages[0])
        }
    } catch (e) {
        dispatch(setAppMessage({severity: "error", text: `${e}`}))
    } finally {
        dispatch(profileToggleLoader(false))
    }
}

export const putStatus = (newStatus: string) => async (dispatch: TAppDispatch) => {
    dispatch(setIsFetching(true))
    try {
        const response = await profileAPI.putProfileStatus(newStatus)
        if (response.resultCode === 0) {
            dispatch(setAppMessage({severity: "success", text: "Successfully!"}))
        } else {
            throw new Error(response.messages[0])
        }
    } catch (err) {
        dispatch(setAppMessage({severity: "error", text: `${err}`}))
    } finally {
        dispatch(setIsFetching(false))
    }
}

export const putAvatar = (newImage: FormData | string) => async (dispatch: TAppDispatch) => {
    dispatch(setIsFetching(true))
    try {
        const response = await profileAPI.putProfileImage(newImage)
        if (response.resultCode === 0) {
            dispatch(setMyAvatar(response.data))
            dispatch(setAppMessage({severity: "success", text: "Successfully!"}))
            return response
        } else {
            throw new Error(response.messages[0])
        }
    } catch (err) {
        dispatch(setAppMessage({severity: "error", text: `${err}`}))
    } finally {
        dispatch(setIsFetching(false))
    }
}

const slice = createSlice({
    name: "profile",
    initialState: {
        isFetching: true,
        activeProfile: defaultProfile,
        status: "",
    } as TProfileState,
    reducers: {
        setActiveProfile(state, action: PayloadAction<TActiveProfileResponse>) {
            state.activeProfile = action.payload
        },
        profileToggleLoader(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        setMyStatus(state, action: PayloadAction<string>) {
            state.status = action.payload
        },
        setMyAvatar(state, action: PayloadAction<TProfileImageResponse>) {
            state.activeProfile.photos.large = action.payload.photos.large
            state.activeProfile.photos.small = action.payload.photos.small
        },
        setProfile(state, action: PayloadAction<Omit<TActiveProfileResponse, "photos">>) {
            state.activeProfile = {...state.activeProfile, ...action.payload, photos: state.activeProfile.photos}
        }
    }
})

export type TProfileState = {
    isFetching: boolean,
    activeProfile: TActiveProfileResponse,
    status: string,
}

const profileReducer = slice.reducer

export const {setActiveProfile, profileToggleLoader, setMyStatus, setMyAvatar, setProfile} = slice.actions

export default profileReducer