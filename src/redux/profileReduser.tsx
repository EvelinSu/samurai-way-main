import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TActions, TProfilePage} from "./types";

const profileReducer = (state: TProfilePage, action: TActions) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: v1(),
                text: action.postText,
                likes: 0,
                isLiked: false,
                date: getStringDate(new Date())
            }
            state.posts.unshift(newPost)
            return state
        case "CHANGE-NEW-POST-TEXT":
            state.newPostText = action.newPostText
            return state
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