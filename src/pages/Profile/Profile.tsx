import React, {FC} from 'react';
import {Box} from "../../components/Box/Box";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import {PostsContainer} from "./Posts/PostsContainer";

export type TProfileProps = {
}
const Profile: FC<TProfileProps> = () => {

    return (
        <SSiteContent stylized>
            <Box alignItems={"center"}>
                <SAvatar border size={180} src={"https://i.imgur.com/VlEAeU2.png"} />
                <Box flexDirection={"column"}>
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
                </Box>
            </Box>
            <PostsContainer />
        </SSiteContent>
    );
};

export default Profile;
