import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {demoDialogs, demoMessages} from "./demo/dialogsDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "dialogs",
    initialState: {
        dialogsList: demoDialogs,
        dialogsMessages: demoMessages,
    } as TDialogsState,
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

export type TMessage = {
    id: string,
    text: string,
    time: string,
    me?: boolean,
    userId?: string
}

type TDialog = {
    newMessageText: string
    messagesId: Array<string>,
    userId: string
}

export type TDialogs = { [Key: string]: TDialog }

type TDialogsState = {
    dialogsList: TDialogs;
    dialogsMessages: Array<TMessage>
}

export const {changeNewMessageTextAC, sendMessageAC} = slice.actions

const dialogsReducer = slice.reducer

export default dialogsReducer