import React, {FC} from 'react';
import {TProfileProps} from "./types";
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import Posts from "./Posts/Posts";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";

const Profile: FC<TProfileProps> = ({addPost, posts, ...props}) => {

    return (
        <>
            <SFlexBlock alignItems={"center"}>
                <SAvatar size={180} src={"https://i.imgur.com/VlEAeU2.png"}/>
                <SFlexBlock flexDirection={"column"}>
                    <STitle color={theme.colors.primaryLightest}>
                        Nickname
                    </STitle>
                    <SText>
                        описание 1
                    </SText>
                    <SText>
                        описание 2
                    </SText>
                    <SText>
                        описание 3
                    </SText>
                </SFlexBlock>
            </SFlexBlock>
            <Posts posts={posts} addPost={addPost}/>
        </>
    );
};

export default Profile;
