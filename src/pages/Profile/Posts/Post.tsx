import React, {FC, useState} from "react";

import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SPost, SPostContent, SPostDate, SPostPanel, SPostText} from "./styled";
import FavoriteIcon from "../../../assets/icons/FavoriteIcon";
import {TPostProps} from "./types";
import FavoriteFillIcon from "../../../assets/icons/FavoriteFillIcon";



const Post: FC<TPostProps> = (props) => {
    const [likes, setLikes] = useState<number>(props.likes)
    const [isLiked, setIsLiked] = useState<boolean>(props.isLiked)
    const onClickHandler = () => {
        setIsLiked(!isLiked);
        isLiked ? setLikes(likes - 1) : setLikes(likes + 1)
    }
    return (
        <SPost>
            <SAvatar src={"https://i.imgur.com/4jbcLBC.png"} />
            <SPostContent>
                <SPostText>
                    {props.text}
                </SPostText>
                <SPostDate>{ props.date }</SPostDate>
            </SPostContent>

            <SPostPanel likes={likes} onClick={() => onClickHandler()}>
                {isLiked ? <FavoriteFillIcon /> : <FavoriteIcon />}
            </SPostPanel>
        </SPost>
    );
};

export default Post;

