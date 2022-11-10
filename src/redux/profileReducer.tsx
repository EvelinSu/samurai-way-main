import {authAPI} from "../api/api";
import {TAppDispatch} from "./store";
import {profileAPI, TActiveProfile} from "../api/profileApi";
import {demoProfile} from "./demo/profileDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TProfilePage = {
    isFetching: boolean,
    activeProfile: TActiveProfile,
    status: string,
}

export const initialState: TProfilePage = ({
    isFetching: true,
    activeProfile: demoProfile,
    status: "Mew",
})

const slice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setActiveProfile(state, action: PayloadAction<TActiveProfile>) {
            state.activeProfile = action.payload
        },
        profileToggleLoader(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        setMyStatus(state, action: PayloadAction<string>) {
            state.status = action.payload
        }
    }
})

export const {setActiveProfile, profileToggleLoader, setMyStatus} = slice.actions

export const getProfile = (userId: number) => async (dispatch: TAppDispatch) => {
    dispatch(profileToggleLoader(true))
    const myId = await authAPI.getMyData().then((res) => res.data.id)
    if (userId || myId) {
        const userStatus = await profileAPI.getProfileStatus(userId || myId)
        profileAPI
            .getProfile(userId || myId)
            .then(profile => dispatch(setActiveProfile(profile)))
            .then(() => dispatch(setMyStatus(userStatus)))
            .catch(() => {})
            .finally(() => dispatch(profileToggleLoader(false)))
    } else {
        dispatch(setActiveProfile(demoProfile))
        dispatch(profileToggleLoader(false))
    }
}

export const putStatus = (newStatus: string) => (dispatch: TAppDispatch) => {
    profileAPI
        .putProfileStatus(newStatus)
        .then(() => dispatch(setMyStatus(newStatus)))
        .then(() => alert('..hello...I.. just wanted to say that the status has been changed!....'))
}

const profileReducer = slice.reducer

export default profileReducer