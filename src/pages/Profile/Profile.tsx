import React, {FC} from 'react';
import {Box} from "../../components/Box/Box";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import {PostsContainer} from "./Posts/PostsContainer";
import Button from "../../components/Button/Button";

export const me = {
    name: "Bublik",
    avatar: "https://i.imgur.com/0x0jeYA.png",
}

type TProfileProps = {
}

const Profile: FC<TProfileProps> = () => {

    return (
        <SSiteContent stylized>
            <Box alignItems={"center"}>
                <SAvatar border size={180} src={me.avatar} />
                <Box flexDirection={"column"}>
                    <STitle color={theme.colors.primaryLightest}>
                        {me.name}
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
                <Box flexDirection={"column"} gap={20} margin={"0 0 auto auto"}>
                    <Button label={'follow'} onClick={() => alert("ITS.... DOESNT'T  WORK")}/>
                    <Button label={'friends'} onClick={() => alert(".... yes")}/>
                </Box>
            </Box>
            <PostsContainer avatar={me.avatar} />
        </SSiteContent>
    );
};

export default Profile;
