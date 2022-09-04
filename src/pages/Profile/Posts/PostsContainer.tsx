import React, {FC} from 'react';
import Posts from "./Posts";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReduser";
import StoreContext from "../../../StoreContext";

const PostsContainer: FC = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().profilePage
                    const posts = state.posts

                    const addPost = (text: string) => store.dispatch(addPostAC(text))
                    const setNewPostText = (text: string) => store.dispatch(changeNewPostTextAC(text))
                    const newPostText = state.newPostText

                    return (
                        <Posts posts={posts}
                               addPost={addPost}
                               setNewPostText={setNewPostText}
                               newPostText={newPostText}
                        />

                    )
                }
            }
        </StoreContext.Consumer>
    )

};

export default PostsContainer;