import React from 'react';
import {STextarea} from "../../../components/Textarea/STextarea";
import {Box} from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

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
