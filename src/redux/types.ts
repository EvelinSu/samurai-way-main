import {changeNewMessageTextAC, sendMessageAC, TDialogsPage} from "./dialogsReduser";
import {addPostAC, changeNewPostTextAC, TProfilePage} from "./profileReduser";



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

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    music: '/music',
    news: '/news',
    settings: '/settings'
}