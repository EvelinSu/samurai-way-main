import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions} from "./types";
import {demoDialogs, demoMessages} from "./demo/dialogsDemo";

type Dictionary<T> = {
    [Key: string]: T;
}
type TDialog = {
    newMessageText: string
    messagesId: Array<string>,
    userId: string
}

export type TDialogs = Dictionary<TDialog>

export type TMessage = {
    id: string,
    text: string,
    time: string,
    me?: boolean,
    userId?: string
}
export type TDialogsPage = {
    dialogsList: TDialogs
    dialogsMessages: Array<TMessage>
}
const initialState: TDialogsPage = {
    dialogsList: demoDialogs,
    dialogsMessages: demoMessages,
}

export const dialogsReducer = (state: TDialogsPage = initialState, action: TActions): TDialogsPage => {
    let stateCopy;
    switch (action.type) {
        case "SEND-MESSAGE":
            let messageId = v1()
            const newMessage: TMessage = {
                id: messageId,
                text: action.messageText,
                time: getStringDate(new Date()),
                me: true
            }
            stateCopy = {
                ...state,
                dialogsMessages: [...state.dialogsMessages, newMessage],
            }
            stateCopy.dialogsList[action.activeDialogKey].messagesId = [...state.dialogsList[action.activeDialogKey].messagesId, messageId]
            return stateCopy
        case "CHANGE-NEW-MESSAGE-TEXT":
            stateCopy = {...state}
            stateCopy.dialogsList[action.activeDialogKey].newMessageText = action.newMessageText
            return stateCopy
        default:
            return state
    }
}

export const sendMessageAC = (text: string, id: string) => ({
    type: "SEND-MESSAGE",
    messageText: text,
    activeDialogKey: id
} as const)

export const changeNewMessageTextAC = (text: string, id: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessageText: text,
    activeDialogKey: id
} as const)

export default dialogsReducer