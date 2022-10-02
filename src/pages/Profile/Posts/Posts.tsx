import React, {FC} from 'react';
import {TPost} from "./types";
import {Box} from "../../../components/Box/Box";
import {STitle} from "../../../components/Text/STitle";
import Post from "./Post";
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import {theme} from "../../../styles/constants";
import {SText} from "../../../components/Text/SText";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../../redux/reduxStore";
import {addPostAC, changeNewPostTextAC, TProfilePage} from "../../../redux/profileReducer";

type TPostsProps = {
    avatar: string
}
const Posts: FC<TPostsProps> = (props) => {

    const state = useSelector<TRootState, TProfilePage>(state => state.profilePage)
    const dispatch = useDispatch()

    const onChangeSetPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>  dispatch(changeNewPostTextAC(e.currentTarget.value))

    const onClickAddPost = () => {
        if(state.newPostText.trim() !== '') {
            state.newPostText && dispatch(addPostAC(state.newPostText.trim()))
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
            <Box gap={20} flexDirection={"column"}>
                <Box alignItems={"center"} gap={10}>
                    <STitle color={theme.colors.primaryLightest}>
                        My posts
                    </STitle>
                    <SText opacity={0.4} title={'Всего постов'}>
                        ({state.posts.length})
                    </SText>
                </Box>
                <STextarea
                    onKeyPress={onKeyPressAddPost}
                    value={state.newPostText}
                    onChange={onChangeSetPostText}
                    placeholder={"Write a new post..."}
                />
                <Box justifyContent={"flex-end"}>
                    <Button onClick={onClickAddPost} isDisabled={state.newPostText.trim() === ''} label={"Send"} />
                </Box>
            </Box>
            {state.posts.length > 0
                ? <Box gap={25} flexDirection={"column"}>
                    {state.posts.map((post) => (
                        <Post
                            avatar={props.avatar}
                            key={post.id}
                            post={post}

                        />
                    ))}
                </Box>
                : <Box
                    justifyContent={"center"}
                    opacity={0.3}
                >
                    there are no posts
                </Box>
            }
        </>
    );
};

export default Posts;