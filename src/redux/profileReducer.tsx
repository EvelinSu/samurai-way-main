import {TActions} from "./types";
import {authAPI} from "../api/api";
import {TAppDispatch} from "./store";
import {profileAPI, TActiveProfile} from "../api/profileApi";
import {demoProfile} from "./demo/profileDemo";

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

const profileReducer = (state: TProfilePage = initialState, action: TActions): TProfilePage => {
    switch (action.type) {
        case "CHANGE-MY-STATUS":
            return {
                ...state,
                status: action.newStatus
            }
        case "SET-ACTIVE-PROFILE":
            return {
                ...state,
                activeProfile: action.activeProfile
            }
        case "TOGGLE-LOADER":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setActiveProfile = (activeProfile: TActiveProfile) => ({
    type: "SET-ACTIVE-PROFILE",
    activeProfile
} as const)
export const profileToggleLoader = (isFetching: boolean) => ({
    type: "TOGGLE-LOADER",
    isFetching
} as const)
export const setMyStatus = (newStatus: string) => ({
    type: "CHANGE-MY-STATUS",
    newStatus
} as const)

export const getProfile = (userId: number) => async (dispatch: TAppDispatch) => {
    dispatch(profileToggleLoader(true))
    const myId = await authAPI.getMyData().then((res) => res.data.id )
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

export default profileReducer