import {changeNewMessageTextAC, sendMessageAC} from "./dialogsReducer";
import {addPostAC, changeNewPostTextAC} from "./profileReducer";
import {followToggle, setCurrentPage, setUsers, setTotalUsersCount, toggleLoader} from "./usersReducer";



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
    | ReturnType<typeof toggleLoader>

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    users: '/users',
    music: '/music',
    news: '/news',
    settings: '/settings'
}