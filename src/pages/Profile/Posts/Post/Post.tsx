import React, {FC} from "react";

import {SAvatar} from "../../../../components/Avatar/SAvatar";
import {SPost, SPostPanel, SPostText} from "../styled";
import {TPostProps} from "./types";
import FavoriteIcon from "../../../../assets/icons/FavoriteIcon";

const Post: FC <TPostProps> = (props) => {
    return (
        <SPost>
            <SAvatar src={"https://i.imgur.com/VlEAeU2.png"} />
            <SPostText>
                {props.text}
            </SPostText>
            <SPostPanel likes={props.likes}>
                <FavoriteIcon/>
            </SPostPanel>
        </SPost>
    );
};

export default Post;

