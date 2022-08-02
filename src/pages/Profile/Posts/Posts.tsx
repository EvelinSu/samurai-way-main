import React, {FC, useState} from 'react';
import {TPost, TPosts} from "./types";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import Post from "./Post";
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import {theme} from "../../../styles/constants";
import {v1} from "uuid";

const Posts: FC<TPosts> = () => {
    const [posts, setPosts] = useState<Array<TPost>>([
        {
            id: v1(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            likes: 4,
            isLiked: false,
            date: new Date(2022, 0, 32)
        },
        {
            id: v1(),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
            likes: 2,
            isLiked: true,
            date: new Date(2021, 4, 5),
        }
    ])
    const [inputText, setInputText] = useState('')
    const addPost = (text: string) => setPosts([{id: v1(), text, likes: 0, isLiked: false, date: new Date()}, ...posts])
    const onChangeSetInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.currentTarget.value)
    const onClickAddPost = () => {
        addPost(inputText)
        setInputText('')
    }
    const onKeyDownAddPost = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.shiftKey && e.key === 'Enter' || e.ctrlKey && e.key === 'Enter') {
            return setInputText(inputText + `\n`)
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            onClickAddPost();
        }
    }

    return (
        <>
            <SFlexBlock gap={20} flexDirection={"column"}>
                <STitle color={theme.colors.primaryLightest}>
                    Мои посты
                </STitle>
                <STextarea
                    onKeyDown={onKeyDownAddPost}
                    value={inputText}
                    onChange={onChangeSetInputText}
                    placeholder={"Введите текст поста..."}
                />
                <SFlexBlock justifyContent={"flex-end"}>
                    <Button onClick={() => onClickAddPost()} label={"Отправить"} />
                </SFlexBlock>
            </SFlexBlock>
            <SFlexBlock gap={25} flexDirection={"column"}>
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
        </>
    );
};

export default Posts;