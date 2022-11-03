import React, {useCallback, useLayoutEffect} from 'react';
import {Box} from "../../components/Box/Box";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import Button from "../../components/Button/Button";
import {
    getProfile,
    putStatus
} from "../../redux/profileReducer";
import userPhoto from "../../assets/img/default-photo.png";
import IconLink from "../../components/IconLink/IconLink";
import {iconsDictionary} from "../../assets/icons/contacts/_iconsDictionary";
import {useParams} from "react-router-dom";
import LoaderIcon from "../../assets/loaders/loader";
import Posts from "./Posts/Posts";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import EditableText from "../../components/EditableText/EditableText";
import {shallowEqual} from "react-redux";

const ProfilePage = () => {
    const {id} = useParams<{ id: string }>()
    useLayoutEffect(() => {
        dispatch(getProfile(userId))
    }, [id])
    const dispatch = useAppDispatch()
    const userId = Number(id);
    const profile = useAppSelector(state => state.profile.activeProfile, shallowEqual)
    const isFetching = useAppSelector(state => state.profile.isFetching)
    const status = useAppSelector(state => state.profile.status)
    const myId = useAppSelector(state => state.auth.id)

    const setStatus = useCallback((newStatus: string) => dispatch(putStatus(newStatus)), [dispatch])

    const mappedContacts = Object.entries(profile.contacts).map((contact) => {
        if (contact[1]) {
            return {
                label: contact[0],
                link: contact[1],
                icon: iconsDictionary[contact[0]]
            }
        }
    }).filter(el => el)

    return (
        isFetching
            ? <LoaderIcon />
            : (<SSiteContent stylized>
                <Box alignItems={"center"} gap={20}>
                    <SAvatar border size={180} src={profile.photos.large || userPhoto} />
                    <Box flexDirection={"column"} overflow={"hidden"}>
                        <STitle margin={"0 0 0 10px"} color={theme.colors.primaryLightest}>
                            {profile.fullName}
                        </STitle>
                        <EditableText
                            myId={myId}
                            currentId={profile.userId}
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
                            {profile.lookingForAJob && profile.lookingForAJobDescription}
                        </SText>
                    </Box>
                    <Box flexDirection={"column"} gap={20} margin={"0 0 auto auto"}>
                        <Button label={'follow'} onClick={() => alert("ITS.... DOESNT'T  WORK")} />
                        <Button label={'friends'} onClick={() => alert(".... yes")} />
                    </Box>
                </Box>
                <Posts myId={myId} name={profile.fullName} avatar={profile.photos.small || userPhoto} />
            </SSiteContent>)

    );
};

export default ProfilePage;
