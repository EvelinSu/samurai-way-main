import React, {FC} from 'react';
import {TPostsProps} from "./types";
import {Box} from "../../../components/Box/Box";
import {STitle} from "../../../components/Text/STitle";
import Post from "./Post";
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import {theme} from "../../../styles/constants";
import {SText} from "../../../components/Text/SText";

const Posts: FC<TPostsProps> = ({posts, addPost, newPostText, setNewPostText, ...props}) => {

    const onChangeSetPostText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>  setNewPostText(e.currentTarget.value)

    const onClickAddPost = () => {
        if(newPostText.trim() !== '') {
            newPostText && addPost(newPostText.trim())
            setNewPostText('')
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
                        ({posts.length})
                    </SText>
                </Box>
                <STextarea
                    onKeyPress={onKeyPressAddPost}
                    value={newPostText}
                    onChange={onChangeSetPostText}
                    placeholder={"Write a new post..."}
                />
                <Box justifyContent={"flex-end"}>
                    <Button onClick={onClickAddPost} isDisabled={newPostText.trim() === ''} label={"Send"} />
                </Box>
            </Box>
            {posts.length > 0
                ? <Box gap={25} flexDirection={"column"}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            text={post.text}
                            likes={post.likes}
                            isLiked={post.isLiked}
                            date={post.date}
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