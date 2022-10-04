import {changeNewMessageTextAC, sendMessageAC} from "./dialogsReducer";
import {addPostAC, changeNewPostTextAC, profileToggleLoader, setActiveProfile} from "./profileReducer";
import {
    followToggle,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    usersToggleLoader,
    setFollowingProgress
} from "./usersReducer";
import {setAuthUserDataAC} from "./authReducer";
import {globalLoaderToggleAC} from "./loaderReducer";

export type TActions =
    // profilePage
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof setActiveProfile>
    | ReturnType<typeof profileToggleLoader>
    // dialogsPage
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>
    // usersPage
    | ReturnType<typeof followToggle>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof usersToggleLoader>
    | ReturnType<typeof setFollowingProgress>
    // auth
    | ReturnType<typeof setAuthUserDataAC>
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