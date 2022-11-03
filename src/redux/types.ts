import {changeNewMessageTextAC, sendMessageAC} from "./dialogsReducer";
import {setMyStatus, profileToggleLoader, setActiveProfile} from "./profileReducer";
import {
    followToggle,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    usersToggleLoader,
    setFollowingProgress, setUsersFilter
} from "./usersReducer";
import {authModalToggleAC, resetAuthUserDataAC, setAuthMessages, setAuthUserDataAC} from "./authReducer";
import {globalLoaderToggleAC} from "./loaderReducer";
import {addPostAC, changeNewPostTextAC} from "./postsReducer";

export type TActions =
// profilePage
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof setActiveProfile>
    | ReturnType<typeof profileToggleLoader>
    | ReturnType<typeof setMyStatus>
    // dialogsPage
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>
    // usersPage
    | ReturnType<typeof followToggle>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof usersToggleLoader>
    | ReturnType<typeof setUsersFilter>
    | ReturnType<typeof setFollowingProgress>
    // auth
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof resetAuthUserDataAC>
    | ReturnType<typeof authModalToggleAC>
    | ReturnType<typeof setAuthMessages>
    // loader
    | ReturnType<typeof globalLoaderToggleAC>

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    users: '/users',
    music: '/music',
    news: '/news',
    settings: '/settings',
    login: '/login'
}