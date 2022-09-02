import {TPost} from "../pages/Profile/Posts/types";
import {changeNewMessageTextAC, sendMessageAC} from "./dialogsReduser";
import {addPostAC, changeNewPostTextAC} from "./profileReduser";

export type TProfilePage = {
    newPostText: string
    posts: Array<TPost>
}

export type TMessage = {
    id: string,
    text: string,
    time: string,
    me?: boolean,
    name?: string,
    avatar?: string,
}

export type TDialog = {
    name: string,
    messagesId: Array<string>,
    avatar: string
    lastSeen: string,
}



export type TDialogsPage = {
    dialogs: Dictionary<TDialog>
    dialogsMessages: Array<TMessage>
    newMessageText: string
}
export type TRootState = {
    profilePage: TProfilePage
    dialogsPage: TDialogsPage
}

type Dictionary<T> = {
    [Key: string]: T;
}

export type TStore = {
    _state: TRootState
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => TRootState
    dispatch: (action: TActions) => void
}

export type TActions =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>