import React, {FC} from 'react';
import {TPosts} from "./types";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import Post from "./Post/Post";
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import {theme} from "../../../styles/constants";
import {TPostProps} from "./Post/types";

const Posts: FC<TPosts> = () => {
    return (
        <>
            <SFlexBlock margin={"0 0 30px 0"} gap={20} flexDirection={"column"}>
                <STitle color={theme.colors.primaryLightest}>
                    Мои посты
                </STitle>
                <STextarea placeholder={"Введите текст поста..."} />
                <SFlexBlock justifyContent={"flex-end"}>
                    <Button label={"Отправить"} />
                </SFlexBlock>
            </SFlexBlock>
            <SFlexBlock gap={25} flexDirection={"column"}>
                {postsArr.map(({id, text, likes}) => (
                    <Post key={id} text={text} likes={likes} />
                ))}
            </SFlexBlock>
        </>
    );
};

export default Posts;

const postsArr = [
    {
        id: 0,
        text: "Lorem ipsum" +
            " dolorddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" +
            " sit amet, consectetur adipiscing elit",
        likes: 4,
    },
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
        likes: 4,
    }
]