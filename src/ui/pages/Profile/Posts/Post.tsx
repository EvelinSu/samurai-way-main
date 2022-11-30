import React, {FC, useState} from "react";
import {SPost, SPostContent, SPostDate, SPostPanel, SPostText} from "./styled";
import FavoriteIcon from "../../../assets/icons/FavoriteIcon";
import FavoriteFillIcon from "../../../assets/icons/FavoriteFillIcon";
import {TPost} from "./types";
import Avatar from "../../../common/Avatar/Avatar";


type TPostProps = {
    post: TPost
    avatar: string
}
const Post: FC<TPostProps> = React.memo(({post, avatar}) => {
    const [likes, setLikes] = useState<number>(post.likes)
    const [isLiked, setIsLiked] = useState<boolean>(post.isLiked)
    const onClickHandler = () => {
        setIsLiked(!isLiked);
        isLiked ? setLikes(likes - 1) : setLikes(likes + 1)
    }
    return (
        <SPost>
            <Avatar img={avatar} />
            <SPostContent>
                <SPostText>
                    {post.text}
                </SPostText>
                <SPostDate>{ post.date }</SPostDate>
            </SPostContent>

            <SPostPanel likes={likes} onClick={() => onClickHandler()}>
                {isLiked ? <FavoriteFillIcon /> : <FavoriteIcon />}
            </SPostPanel>
        </SPost>
    );
});

export default Post;

