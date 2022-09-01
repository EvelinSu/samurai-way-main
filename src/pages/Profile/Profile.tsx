import React, {FC} from 'react';
import {TProfileProps} from "./types";
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import Posts from "./Posts/Posts";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {addPostAC, changeNewPostTextAC} from "../../redux/state";

const Profile: FC<TProfileProps> = ({dispatch, state}) => {

    const posts = state.profilePage.posts
    const addPost = (text: string) => dispatch(addPostAC(text))
    const setNewPostText = (text: string) => dispatch(changeNewPostTextAC(text))
    const newPostText = state.profilePage.newPostText

    return (
        <>
            <SFlexBlock alignItems={"center"}>
                <SAvatar size={180} src={"https://i.imgur.com/VlEAeU2.png"} />
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
            <Posts posts={posts} addPost={addPost} setNewPostText={setNewPostText} newPostText={newPostText} />
        </>
    );
};

export default Profile;
