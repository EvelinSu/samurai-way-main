import React, {FC} from 'react';
import {Box} from "../../components/Box/Box";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import {PostsContainer} from "./Posts/PostsContainer";
import Button from "../../components/Button/Button";
import {TActiveProfile} from "../../redux/profileReducer";
import userPhoto from "../../assets/img/default-photo.png";
import IconLink from "../../components/IconLink/IconLink";
import {iconsDictionary} from "../../assets/icons/contacts/_iconsDictionary";

export const me = {
    name: "Bublik",
    avatar: "https://i.imgur.com/0x0jeYA.png",
}

type TProfileProps = {
    activeProfile: TActiveProfile
}

const Profile: FC<TProfileProps> = ({activeProfile}) => {

    const mappedContacts = Object.entries(activeProfile.contacts).map((contact) => {
        if (contact[1]) {
            return {
                label: contact[0],
                link: contact[1],
                icon: iconsDictionary[contact[0]]
            }
        }
    }).filter(el => el)

    return (

        <SSiteContent stylized>
            <Box alignItems={"center"}>
                <SAvatar border size={180} src={activeProfile.photos.large || userPhoto} />
                <Box flexDirection={"column"}>
                    <STitle color={theme.colors.primaryLightest}>
                        {activeProfile.fullName}
                    </STitle>
                    <SText opacity={!activeProfile.aboutMe ? 0.3 : 1}>
                        {activeProfile.aboutMe || '- the user is silent -'}
                    </SText>
                    <Box>
                        {
                            mappedContacts.length > 0
                            ? mappedContacts.map((el) => (
                                <IconLink
                                    key={el?.label}
                                    label={el?.label}
                                    link={el?.link}
                                    icon={el?.icon}
                                />
                            ))
                            : <SText opacity={0.3}>
                                - no contacts -
                            </SText>}
                    </Box>
                    <SText>
                        Tunas are the planks of the old urchin.
                    </SText>
                </Box>
                <Box flexDirection={"column"} gap={20} margin={"0 0 auto auto"}>
                    <Button label={'follow'} onClick={() => alert("ITS.... DOESNT'T  WORK")} />
                    <Button label={'friends'} onClick={() => alert(".... yes")} />
                </Box>
            </Box>
            <PostsContainer avatar={activeProfile.photos.small || userPhoto} />
        </SSiteContent>
    );
};

export default Profile;
