import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {demoPosts} from "./demo/profileDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "posts",
    initialState: {
        newPostText: "",
        postsList: demoPosts,
    } as TPostsState,
    reducers: {
        addPostAC(state, action: PayloadAction<string>) {
            const newPost: TPost = {
                id: v1(),
                text: action.payload,
                likes: 0,
                isLiked: false,
                date: getStringDate(new Date())
            }
            state.postsList.unshift(newPost)
        },
        changeNewPostTextAC(state, action: PayloadAction<string>) {
            state.newPostText = action.payload
        }
    }
})

export type TPost = {
    id: string,
    text: string,
    likes: number,
    isLiked: boolean,
    date: string,
}

export type TPostsState = {
    newPostText: string,
    postsList: Array<TPost>
}

export const {addPostAC, changeNewPostTextAC} = slice.actions

const postsReducer = slice.reducer

export default postsReducer