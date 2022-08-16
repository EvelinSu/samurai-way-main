import {v1} from "uuid";
import {TPost} from "../pages/Profile/Posts/types";
import {TDialog} from "../pages/Dialogs/types";
import {getStringDate} from "../common/utils";
import {TMessage} from "../components/Message/types";
import {rerenderEntireTree} from "../render";

type TProfilePage = {
    posts: Array<TPost>
}
export type TRootState = {
    profilePage: TProfilePage
    dialogsPage: Dictionary<TDialog>
    dialogsMessages: Array<TMessage>
}

export type Dictionary<T> = {
    [Key: string]: T;
}

const defaultDate = "давно"
console.log(typeof defaultDate)

export const state: TRootState = {
    profilePage: {
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
}

export const addPost = (text: string) => (
    state.profilePage.posts.unshift({id: v1(), text, likes: 0, isLiked: false, date: getStringDate(new Date())})
)

export const sendMessage = (text: string, activeDialogKey: string) => {
    let messageId = v1()
    state.dialogsMessages.push({id: messageId, text, time: getStringDate(new Date()), me: true})
    state.dialogsPage[activeDialogKey].messagesId.push(messageId)
    rerenderEntireTree(state)
}