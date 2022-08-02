import React, {FC, useState} from "react";

import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SPost, SPostContent, SPostDate, SPostPanel, SPostText} from "./styled";
import FavoriteIcon from "../../../assets/icons/FavoriteIcon";
import {TPostProps} from "./types";
import FavoriteFillIcon from "../../../assets/icons/FavoriteFillIcon";
import {SText} from "../../../components/Text/SText";
import {getStringDate} from "../../../commoon/utils";



const Post: FC<TPostProps> = (props) => {
    const [likes, setLikes] = useState<number>(props.likes)
    const [isLiked, setIsLiked] = useState<boolean>(props.isLiked)
    const onClickHandler = () => {
        setIsLiked(!isLiked);
        isLiked ? setLikes(likes - 1) : setLikes(likes + 1)
    }
    return (
        <SPost>
            <SAvatar src={"https://i.imgur.com/VlEAeU2.png"} />
            <SPostContent>
                <SPostText>
                    {props.text || <SText opacity={0.3}> Пост без слов, все и так понятно</SText>}
                </SPostText>
                <SPostDate>{ getStringDate(props.date) }</SPostDate>
            </SPostContent>

            <SPostPanel likes={likes} onClick={() => onClickHandler()}>
                {isLiked ? <FavoriteFillIcon /> : <FavoriteIcon />}
            </SPostPanel>
        </SPost>
    );
};

export default Post;

