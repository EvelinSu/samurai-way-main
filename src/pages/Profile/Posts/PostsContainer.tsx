import React from 'react';
import Posts from "./Posts";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {TRootState} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {TPost} from "./types";

type TMapStateToProps = {
    posts: Array<TPost>
    newPostText: string
    ownProps: TOwnProps
}

type TOwnProps = {
    avatar: string
}
export const mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        ownProps: {
            avatar: ownProps.avatar
        }
    }
}

type TMapDispatchStateToProps = {
    setNewPostText: (text: string) => void
    addPost: (text: string) => void
}
export const mapDispatchToProps = (dispatch: Dispatch): TMapDispatchStateToProps => {
    return {
        addPost: (text) =>  dispatch(addPostAC(text)),
        setNewPostText:  (text) => dispatch(changeNewPostTextAC(text))
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)