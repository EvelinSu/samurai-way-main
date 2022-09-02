import React, {FC} from 'react';
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import Posts from "./Posts/Posts";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {addPostAC, changeNewPostTextAC} from "../../redux/profileReduser";
import {TActions, TRootState} from "../../redux/types";

type TProfileProps = {
    dispatch: (action: TActions) => void
    state: TRootState
}
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
                        The evil plunder darkly pulls the mainland.
                    </SText>
                    <SText>
                        Jolly, wet wind. you won't ransack the quarter-deck.
                    </SText>
                    <SText>
                        Well, belay.
                    </SText>
                </SFlexBlock>
            </SFlexBlock>
            <Posts posts={posts} addPost={addPost} setNewPostText={setNewPostText} newPostText={newPostText} />
        </>
    );
};

export default Profile;
