import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions} from "./types";
import {TPost} from "../pages/Profile/Posts/types";

export type TProfilePage = {
    newPostText: string,
    posts: Array<TPost>
}

const initialState: TProfilePage = ({
    newPostText: '',
    posts: [
        {
            id: v1(),
            text: "Rinse three oz of blueberries in one container of gravy. ",
            likes: 4,
            isLiked: false,
            date: '1 hour ago',
        },
        {
            id: v1(),
            text: "Arg! Pieces o' beauty are forever golden. Scurvy, jolly skiffs awkwardly pull a small, lively lagoon. The lad drinks with fortune, mark the seychelles until it waves. ",
            likes: 2,
            isLiked: true,
            date: '1 hour ago'
        }
    ],
})

const profileReducer = (state: TProfilePage = initialState, action: TActions): TProfilePage => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: TPost = {
                id: v1(),
                text: action.postText,
                likes: 0,
                isLiked: false,
                date: getStringDate(new Date())
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case "CHANGE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newPostText
            }
        default:
            return state
    }
}

export const addPostAC = (text: string) => ({
    type: "ADD-POST",
    postText: text
} as const)

export const changeNewPostTextAC = (text: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    newPostText: text
} as const)

export default profileReducer