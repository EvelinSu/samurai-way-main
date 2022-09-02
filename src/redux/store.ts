import {v1} from "uuid";
import {TStore} from "./types";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import {getStringDate} from "../common/utils";

export const PATH = {
    profile: '/profile',
    messages: '/messages',
    music: '/music',
    news: '/news',
    settings: '/settings'
}

const defaultDate = "1 hour ago"

let store: TStore = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: v1(),
                    text: "Rinse three oz of blueberries in one container of gravy. ",
                    likes: 4,
                    isLiked: false,
                    date: defaultDate,
                },
                {
                    id: v1(),
                    text: "Arg! Pieces o' beauty are forever golden. Scurvy, jolly skiffs awkwardly pull a small, lively lagoon. The lad drinks with fortune, mark the seychelles until it waves. ",
                    likes: 2,
                    isLiked: true,
                    date: defaultDate
                }
            ],
        },
        dialogsPage: {
            dialogs: {
                "1": {
                    name: "Kisa",
                    avatar: "https://i.imgur.com/N3ErVCc.png",
                    messagesId: ["1", "2", "4"],
                    lastSeen: 'today',
                },
                "2": {
                    name: "Kuki",
                    avatar: "https://i.imgur.com/a2GuVCv.png",
                    messagesId: ["3", "5"],
                    lastSeen: '',
                },
                "3": {
                    name: "Pushok",
                    avatar: "https://i.imgur.com/1Skz4Sj.png",
                    messagesId: ["6"],
                    lastSeen: '1 hour ago',

                }
            },
            newMessageText: '',
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
        },
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}

export default store
