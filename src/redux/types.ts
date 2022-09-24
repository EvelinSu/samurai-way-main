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

export type TMessage = {
    id: string,
    text: string,
    time: string,
    me?: boolean,
    userId?: string
}

export type TDialog = {
    newMessageText: string
    messagesId: Array<string>,
    userId: string
}

export type TActions =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof followToggle>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof usersToggleLoader>
    | ReturnType<typeof setActiveProfile>
    | ReturnType<typeof profileToggleLoader>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setFollowingProgress>

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    users: '/users',
    music: '/music',
    news: '/news',
    settings: '/settings',
    login: '/login'
}