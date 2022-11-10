import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {demoDialogs, demoMessages} from "./demo/dialogsDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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

const slice = createSlice({
    name: "dialogs",
    initialState: initialState,
    reducers: {
        changeNewMessageTextAC(state, action: PayloadAction<{ newMessageText: string, activeDialogKey: string }>) {
            state.dialogsList[action.payload.activeDialogKey].newMessageText = action.payload.newMessageText
        },
        sendMessageAC(state, action: PayloadAction<{ messageText: string, activeDialogKey: string }>) {
            const messageId = v1()
            const newMessage = {
                id: messageId,
                text: action.payload.messageText,
                time: getStringDate(new Date()),
                me: true
            }
            state.dialogsMessages.push(newMessage)
            state.dialogsList[action.payload.activeDialogKey].messagesId.push(messageId)

        }
    }
})

export const {changeNewMessageTextAC, sendMessageAC} = slice.actions

const dialogsReducer = slice.reducer

export default dialogsReducer