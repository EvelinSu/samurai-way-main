import React, {FC} from 'react';
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import {TReduxStore} from "../../redux/reduxStore";
import PostsContainer from "./Posts/PostsContainer";

export type TProfileProps = {
    store: TReduxStore
}
const Profile: FC<TProfileProps> = ({store}) => {

    return (
        <SSiteContent stylized>
            <SFlexBlock alignItems={"center"}>
                <SAvatar border size={180} src={"https://i.imgur.com/VlEAeU2.png"} />
                <SFlexBlock flexDirection={"column"}>
                    <STitle color={theme.colors.primaryLightest}>
                        Nickname
                    </STitle>
                    <SText>
                        The evil plunder darkly pulls the mainland.
                    </SText>
                    <SText>
                        Faith, madness, and passion.
                    </SText>
                    <SText>
                        Tunas are the planks of the old urchin.
                    </SText>
                </SFlexBlock>
            </SFlexBlock>
            <PostsContainer store={store} />
        </SSiteContent>
    );
};

export default Profile;
