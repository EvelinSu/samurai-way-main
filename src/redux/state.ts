import {v1} from "uuid";
import {TPost} from "../pages/Profile/Posts/types";
import {TDialog} from "../pages/Dialogs/types";

type TProfilePage = {
    posts: Array<TPost>
}
type TRootState = {
    profilePage: TProfilePage
    dialogsPage: Dictionary<TDialog>
}

type Dictionary<T> = {
    [Key: string]: T;
}

export const state: TRootState = {
    profilePage: {
        posts: [
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                likes: 4,
                isLiked: false,
                date: new Date(2022, 0, 32)
            },
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
                likes: 2,
                isLiked: true,
                date: new Date(2021, 4, 5),
            }
        ],
    },
    dialogsPage: {
        "1": {
            name: "Kisa",
            avatar: "https://i.imgur.com/N3ErVCc.png",
            messages: [
                {
                    id: v1(),
                    text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                    time: "15:54",
                    me: true,
                },
                {
                    id: v1(),
                    text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:54",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum ing sit amet",
                    time: "15:54",
                    me: true,
                },
                {
                    id: v1(),
                    text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:54",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum ing sit amet",
                    time: "15:54",
                    me: true,
                },
                {
                    id: v1(),
                    text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:54",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                    time: "15:54",
                    me: true,
                },
                {
                    id: v1(),
                    text: "consectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:54",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum ing sit amet",
                    time: "15:54",
                    me: true,
                },
                {
                    id: v1(),
                    text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:54",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                    time: "15:54",
                    me: true,
                },
                {
                    id: v1(),
                    text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:54",
                },
            ],

        },
        "2": {
            name: "Kuki",
            avatar: "https://i.imgur.com/a2GuVCv.png",
            messages: [
                {
                    id: v1(),
                    text: "Lorem ipsum t amet,scing elitLorem ipsum dolor sit amet",
                    time: "15:44",
                    me: true,
                },
                {
                    id: v1(),
                    text: "olor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:24",
                },
            ],
        },
        "3": {
            name: "Pushok",
            avatar: "https://i.imgur.com/1Skz4Sj.png",
            messages: [
                {
                    id: v1(),
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:24",
                    me: true,
                },
                {
                    id: v1(),
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:53",
                },
                {
                    id: v1(),
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                    time: "15:14",
                },
            ],

        }
    }
}
