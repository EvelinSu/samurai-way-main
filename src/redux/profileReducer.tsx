import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions} from "./types";
import {TPost} from "../pages/Profile/Posts/types";
import {authAPI} from "../api/api";
import {TAppDispatch} from "./reduxStore";
import {profileAPI, TActiveProfile} from "../api/profileApi";
import {demoPosts, demoProfile} from "./demo/profileDemo";

export type TProfilePage = {
    isFetching: boolean,
    activeProfile: TActiveProfile,
    newPostText: string,
    status: string,
    posts: Array<TPost>
}

export const initialState: TProfilePage = ({
    isFetching: true,
    activeProfile: demoProfile,
    newPostText: '',
    status: 'Mew',
    posts: demoPosts,
})

const profileReducer = (state: TProfilePage = initialState, action: TActions): TProfilePage => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: TPost = {
                id: v1(),
                text: action.postText,
                likes: 0,
                isLiked: false,
                date: getStringDate(new Date())
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case "CHANGE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newPostText
            }
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

export const addPostAC = (text: string) => ({
    type: "ADD-POST",
    postText: text
} as const)

export const changeNewPostTextAC = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    newPostText: text
} as const)

export const setActiveProfile = (activeProfile: TActiveProfile) => ({
    type: "SET-ACTIVE-PROFILE",
    activeProfile
} as const)

export const profileToggleLoader = (isFetching: boolean) => ({
    type: "TOGGLE-LOADER",
    isFetching
} as const)
export const changeMyStatus = (newStatus: string) => ({
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
            .then(() => dispatch(changeMyStatus(userStatus)))
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
        .then(() => dispatch(changeMyStatus(newStatus)))
        .then(() => alert('..hello...I.. just wanted to say that the status has been changed!....'))
}

export default profileReducer