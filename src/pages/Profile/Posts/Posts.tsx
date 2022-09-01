import React, {FC} from 'react';
import {TPostsProps} from "./types";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import Post from "./Post";
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import {theme} from "../../../styles/constants";
import {SText} from "../../../components/Text/SText";

const Posts: FC<TPostsProps> = ({posts, addPost, newPostText, setNewPostText, ...props}) => {

    const onChangeSetInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.currentTarget.value)
    }
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
            <SFlexBlock gap={20} flexDirection={"column"}>
                <SFlexBlock alignItems={"center"} gap={10}>
                    <STitle color={theme.colors.primaryLightest}>
                        Мои посты
                    </STitle>
                    <SText opacity={0.4} title={'Всего постов'}>
                        ({posts.length})
                    </SText>
                </SFlexBlock>
                <STextarea
                    onKeyPress={onKeyPressAddPost}
                    value={newPostText}
                    onChange={onChangeSetInputText}
                    placeholder={"Введите текст поста..."}
                />
                <SFlexBlock justifyContent={"flex-end"}>
                    <Button onClick={onClickAddPost} isDisabled={newPostText.trim() === ''} label={"Отправить"} />
                </SFlexBlock>
            </SFlexBlock>
            {posts.length > 0
                ? <SFlexBlock gap={25} flexDirection={"column"}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            text={post.text}
                            likes={post.likes}
                            isLiked={post.isLiked}
                            date={post.date}
                        />
                    ))}
                </SFlexBlock>
                : <SFlexBlock
                    justifyContent={"center"}
                    opacity={0.3}
                >
                    Постов еще нет
                </SFlexBlock>
            }
        </>
    );
};

export default Posts;