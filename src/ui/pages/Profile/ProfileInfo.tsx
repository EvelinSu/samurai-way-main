import React, {FC, useCallback, useState} from 'react';
import Avatar from "../../common/Avatar/Avatar";
import userPhoto from "../../assets/img/default-photo.png";
import {Box} from "../../common/Box/Box";
import {STitle} from "../../common/Text/STitle";
import {theme} from "../../styles/constants";
import EditableText from "../../common/EditableText/EditableText";
import IconLink from "../../common/IconLink/IconLink";
import {SText} from "../../common/Text/SText";
import Button from "../../common/Button/Button";
import {authModalToggleAC} from "../../../bll/authReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks";
import {putStatus} from "../../../bll/profileReducer";
import {iconsDictionary} from "../../assets/icons/contacts/_iconsDictionary";

type TProfileInfo = {
    myId: number
}
export const ProfileInfo: FC<TProfileInfo> = (props) => {
    const dispatch = useAppDispatch()

    const [follow, setIsFollow] = useState(false)

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const status = useAppSelector(state => state.profile.status)
    const activeProfile = useAppSelector(state => state.profile.activeProfile)

    const mappedContacts = Object.entries(activeProfile.contacts).map((contact) => {
        if (contact[1]) {
            return {
                label: contact[0],
                link: contact[1],
                icon: iconsDictionary[contact[0]]
            }
        }
    }).filter(el => el)
    const setStatusHandler = useCallback((newStatus: string) => {
        dispatch(putStatus(newStatus))
    }, [])

    return (
        <Box alignItems={"center"} gap={20}>
            <Avatar
                size={"large"}
                img={activeProfile.photos.large || userPhoto}
            />
            <Box flexDirection={"column"} overflow={"hidden"}>
                <STitle margin={"0 0 0 10px"} color={theme.colors.primaryLightest}>
                    {activeProfile.fullName}
                </STitle>
                <EditableText
                    myId={props.myId}
                    currentId={activeProfile.userId}
                    text={status}
                    setText={setStatusHandler}
                    placeholder={"- the user is silent -"}
                    maxLength={300}
                    title={'Click to change status'}
                />
                <Box margin={"0 0 0 10px"} gap={13}>
                    {mappedContacts.length > 0
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
                <SText margin={"0 0 0 10px"}>
                    {activeProfile.lookingForAJob && activeProfile.lookingForAJobDescription}
                </SText>
            </Box>
            <Box
                flexDirection={"column"}
                alignItems={"flex-end"}
                gap={20}
                margin={"0 0 auto auto"}
            >
                {activeProfile.userId !== props.myId && (
                    <Button
                        backgroundColor={follow ? theme.colors.button.active : theme.colors.button.cancel}
                        label={follow ? 'unfollow' : 'follow'}
                        onClick={() => isAuth ? setIsFollow(!follow) : dispatch(authModalToggleAC(true))}
                    />
                )}
                <Box>
                    <Button label={'friends'} onClick={() => alert("in progress")} />
                </Box>
            </Box>
        </Box>
    );
};

