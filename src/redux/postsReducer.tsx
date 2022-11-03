import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions} from "./types";
import {TPost} from "../pages/Profile/Posts/types";
import {demoPosts} from "./demo/profileDemo";

export type TPosts = {
    newPostText: string,
    postsList: Array<TPost>
}

export const initialState: TPosts = ({
    newPostText: '',
    postsList: demoPosts,
})

const postsReducer = (state: TPosts = initialState, action: TActions): TPosts => {
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
                postsList: [newPost, ...state.postsList]
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


export default postsReducer