import React, {useCallback, useLayoutEffect} from 'react';
import {Box} from "../../common/Box/Box";
import {SText} from "../../common/Text/SText";
import {STitle} from "../../common/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import Button from "../../common/Button/Button";
import {
    getProfile, putAvatar,
    putStatus
} from "../../../bll/profileReducer";
import userPhoto from "../../assets/img/default-photo.png";
import IconLink from "../../common/IconLink/IconLink";
import {iconsDictionary} from "../../assets/icons/contacts/_iconsDictionary";
import {useParams} from "react-router-dom";
import LoaderIcon from "../../assets/loaders/loader";
import Posts from "./Posts/Posts";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import EditableText from "../../common/EditableText/EditableText";
import Avatar from "../../common/Avatar/Avatar";

const ProfilePage = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams<{ id: string }>()
    useLayoutEffect(() => {
        dispatch(getProfile(userId))
    }, [id])
    const userId = Number(id);

    const {activeProfile, isFetching, status} = useAppSelector(state => state.profile)

    const myId = useAppSelector(state => state.profile.activeProfile.userId)
    const setStatus = useCallback((newStatus: string) => dispatch(putStatus(newStatus)), [dispatch])

    const mappedContacts = Object.entries(activeProfile.contacts).map((contact) => {
        if (contact[1]) {
            return {
                label: contact[0],
                link: contact[1],
                icon: iconsDictionary[contact[0]]
            }
        }
    }).filter(el => el)

    const changeAvatarHandler = (newAvatar: FormData) => {
        dispatch(putAvatar(newAvatar))
    }

    return (
        isFetching
            ? <LoaderIcon />
            : (<SSiteContent stylized>
                <Box alignItems={"center"} gap={20}>
                    <Avatar
                        size={"large"}
                        onClick={changeAvatarHandler}
                        deleteImageHandler={() => dispatch(putAvatar(''))}
                        img={activeProfile.photos.large || userPhoto}
                        isEditable={activeProfile.userId === myId && myId !== 0}
                    />
                    <Box flexDirection={"column"} overflow={"hidden"}>
                        <STitle margin={"0 0 0 10px"} color={theme.colors.primaryLightest}>
                            {activeProfile.fullName}
                        </STitle>
                        <EditableText
                            myId={myId}
                            currentId={activeProfile.userId}
                            text={status}
                            setText={setStatus}
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
                        gap={20}
                        margin={"0 0 auto auto"}
                    >
                        {activeProfile.userId !== myId && (
                            <Button
                                label={'follow'}
                                onClick={() => alert("in progress")}
                            />
                        )}
                        <Button label={'friends'} onClick={() => alert("in progress")} />
                    </Box>
                </Box>
                <Posts
                    myId={myId}
                    name={activeProfile.fullName}
                    avatar={activeProfile.photos.small || userPhoto}
                />
            </SSiteContent>)

    );
};

export default ProfilePage;
