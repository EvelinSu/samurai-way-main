import React from 'react';
import {STextarea} from "../../../common/Textarea/STextarea";
import {Box} from "../../../common/Box/Box";
import Button from "../../../common/Button/Button";
import {useDispatch} from "react-redux";
import {addPostAC, changeNewPostTextAC} from "../../../../bll/postsReducer";

type TAddPost = {
    newPostText: string
}

const AddPost: React.FC<TAddPost> = ({newPostText}) => {
    const dispatch = useDispatch()

    const onChangeSetPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewPostTextAC(e.currentTarget.value))
    }

    const onClickAddPost = () => {
        if (newPostText.trim() !== '') {
            newPostText && dispatch(addPostAC(newPostText.trim()))
            dispatch(changeNewPostTextAC(''))
        }
    }

    const onKeyPressAddPost = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            return
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            onClickAddPost();
        }
    }

    return (
        <>
            <STextarea
                onKeyPress={onKeyPressAddPost}
                value={newPostText}
                onChange={onChangeSetPostText}
                placeholder={"Write a new post..."}
            />
            <Box justifyContent={"flex-end"}>
                <Button onClick={onClickAddPost} isDisabled={newPostText.trim() === ''} label={"Send"} />
            </Box>
        </>
    );
};

export default AddPost;
