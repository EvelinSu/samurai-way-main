import {changeNewMessageTextAC, sendMessageAC} from "./dialogsReducer";
import {addPostAC, changeNewPostTextAC} from "./profileReducer";
import {followUserAC, setUsersAC, unFollowUserAC} from "./usersReducer";



export type TMessage = {
    id: string,
    text: string,
    time: string,
    me?: boolean,
    name?: string,
    avatar?: string,
}

export type TDialog = {
    newMessageText: string
    name: string,
    messagesId: Array<string>,
    avatar: string
    lastSeen: string,
}


export type TActions =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>
    | ReturnType<typeof setUsersAC>

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    users: '/users',
    music: '/music',
    news: '/news',
    settings: '/settings'
}