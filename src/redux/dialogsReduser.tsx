import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions, TDialogsPage, TMessage} from "./types";

export const dialogsReducer = (state: TDialogsPage, action: TActions) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let messageId = v1()
            const newMessage: TMessage = {
                id: messageId,
                text: action.messageText,
                time: getStringDate(new Date()),
                me: true
            }
            state.dialogsMessages.push(newMessage)
            state.dialogs[action.activeDialogKey].messagesId.push(messageId)
            return state
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const sendMessageAC = (text: string, id: string) => ({
    type: "SEND-MESSAGE",
    messageText: text,
    activeDialogKey: id
} as const)

export const changeNewMessageTextAC = (text: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessageText: text
} as const)

export default dialogsReducer