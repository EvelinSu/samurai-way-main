import React, {FC} from 'react';
import Posts from "./Posts";
import {TProfileProps} from "../Profile";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReduser";

const PostsContainer: FC<TProfileProps> = ({store}) => {

    const state = store.getState().profilePage
    const posts = state.posts

    const addPost = (text: string) => store.dispatch(addPostAC(text))
    const setNewPostText = (text: string) => store.dispatch(changeNewPostTextAC(text))
    const newPostText = state.newPostText

    return (
        <Posts posts={posts} addPost={addPost} setNewPostText={setNewPostText} newPostText={newPostText} />
    );
};

export default PostsContainer;