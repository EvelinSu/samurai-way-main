import {v1} from "uuid";
import {getStringDate} from "../common/utils";
import {TPost} from "../pages/Profile/Posts/types";
import {demoPosts} from "./demo/profileDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TPosts = {
    newPostText: string,
    postsList: Array<TPost>
}

export const initialState: TPosts = ({
    newPostText: "",
    postsList: demoPosts,
})

const slice = createSlice({
    name: "posts",
    initialState,
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

export const {addPostAC, changeNewPostTextAC} = slice.actions

const postsReducer = slice.reducer

export default postsReducer