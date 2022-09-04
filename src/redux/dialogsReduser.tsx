import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions, TDialog, TMessage} from "./types";

let defaultDate = '1 hour ago'

type Dictionary<T> = {
    [Key: string]: T;
}
export type TDialogs = Dictionary<TDialog>

export type TDialogsPage = {
    dialogs: TDialogs
    dialogsMessages: Array<TMessage>
}
const initialState = {
    dialogs: {
        "1": {
            newMessageText: '',
            name: "Kisa",
            avatar: "https://i.imgur.com/N3ErVCc.png",
            messagesId: ["1", "2", "4"],
            lastSeen: 'today',
        },
        "2": {
            newMessageText: '',
            name: "Kuki",
            avatar: "https://i.imgur.com/a2GuVCv.png",
            messagesId: ["3", "5"],
            lastSeen: '',
        },
        "3": {
            newMessageText: '',
            name: "Pushok",
            avatar: "https://i.imgur.com/1Skz4Sj.png",
            messagesId: ["6"],
            lastSeen: '1 hour ago',

        }
    },
    dialogsMessages: [
        {
            id: "1",
            text: "C'mon, ye evil wave- set sails for life! All reefs fight dark, wet plunders. The gold sails with riddle, pull the cook islands until it stutters. ",
            time: defaultDate,
            me: true,
        },
        {
            id: "2",
            text: "Ales grow from horrors like heavy-hearted codfishs. ",
            time: defaultDate,
        },
        {
            id: "3",
            text: "Greed is a sunny skull. ",
            time: defaultDate,
            me: true,
        },
        {
            id: "4",
            text: "How small. You hoist like a rum. ",
            time: defaultDate,

        },
        {
            id: "5",
            text: "Where is the salty moon? ",
            time: defaultDate,
            me: true,
        },
        {
            id: "6",
            text: "How small. You taste like a sun. ",
            time: defaultDate,
        }
    ]
}

export const dialogsReducer = (state: TDialogsPage = initialState, action: TActions): TDialogsPage => {
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
            state.dialogs[action.activeDialogKey].newMessageText = action.newMessageText
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

export const changeNewMessageTextAC = (text: string, id: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessageText: text,
    activeDialogKey: id
} as const)

export default dialogsReducer