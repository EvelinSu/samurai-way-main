import {v1} from "uuid";
import {TPost} from "../pages/Profile/Posts/types";
import {TDialog} from "../pages/Dialogs/types";
import {getStringDate} from "../common/utils";
import {TMessage} from "../components/Message/types";

type TProfilePage = {
    newPostText: string
    posts: Array<TPost>
}
export type TRootState = {
    profilePage: TProfilePage
    dialogsPage: Dictionary<TDialog>
    dialogsMessages: Array<TMessage>
    newMessageText: string
}

export type Dictionary<T> = {
    [Key: string]: T;
}

export type TStore = {
    _state: TRootState
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => TRootState
    getPosts: () => Array<TPost>
    dispatch: (action: TActions) => void
}

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    music: '/music',
    news: '/news',
    settings: '/settings'
}

const defaultDate = "давно"

let store: TStore = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: v1(),
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    likes: 4,
                    isLiked: false,
                    date: "давно",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
                    likes: 2,
                    isLiked: true,
                    date: "давно"
                }
            ],
        },
        dialogsPage: {
            "1": {
                name: "Kisa",
                avatar: "https://i.imgur.com/N3ErVCc.png",
                messagesId: ["1", "2", "4"]

            },
            "2": {
                name: "Kuki",
                avatar: "https://i.imgur.com/a2GuVCv.png",
                messagesId: ["3", "5"]
            },
            "3": {
                name: "Pushok",
                avatar: "https://i.imgur.com/1Skz4Sj.png",
                messagesId: ["6"],

            }
        },
        newMessageText: '',
        dialogsMessages: [
            {
                id: "1",
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: defaultDate,
                me: true,
            },
            {
                id: "2",
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: defaultDate,
            },
            {
                id: "3",
                text: "Lorem ipsum ing sit amet",
                time: defaultDate,
                me: true,
            },
            {
                id: "4",
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: defaultDate,

            },
            {
                id: "5",
                text: "Lorem ipsum ing sit amet",
                time: defaultDate,
                me: true,
            },
            {
                id: "6",
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: defaultDate,
            }
        ]
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    getPosts() {
        return this._state.profilePage.posts
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: TPost = {
                id: v1(),
                text: action.postText,
                likes: 0,
                isLiked: false,
                date: getStringDate(new Date())
            }
            this._state.profilePage.posts.unshift(newPost)
            this._callSubscriber()
        } else if (action.type === "CHANGE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        } else if (action.type === "SEND-MESSAGE") {
            let messageId = v1()
            const newMessage: TMessage = {
                id: messageId,
                text: action.messageText,
                time: getStringDate(new Date()),
                me: true
            }
            this._state.dialogsMessages.push(newMessage)
            this._state.dialogsPage[action.activeDialogKey].messagesId.push(messageId)
            this._callSubscriber()
        } else if (action.type === "CHANGE-NEW-MESSAGE-TEXT") {
            this._state.newMessageText = action.newMessageText
            this._callSubscriber()
        }
    }
}

export type TActions =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof changeNewMessageTextAC>

export const addPostAC = (text: string) => ({
    type: "ADD-POST",
    postText: text
} as const)

export const changeNewPostTextAC = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    newPostText: text
} as const)

export const sendMessageAC = (text: string, id: string) => ({
    type: "SEND-MESSAGE",
    messageText: text,
    activeDialogKey: id
} as const)

export const changeNewMessageTextAC = (text: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessageText: text
} as const)

export default store
