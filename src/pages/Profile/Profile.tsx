import React, {FC, useEffect, useState} from 'react';
import {Box} from "../../components/Box/Box";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {STitle} from "../../components/Text/STitle";
import {theme} from "../../styles/constants";
import {SSiteContent} from "../../layout/styled";
import Button from "../../components/Button/Button";
import {
    getProfile, presentationProfile, profileToggleLoader,
    putStatus,
    setActiveProfile,
    TActiveProfile,
} from "../../redux/profileReducer";
import userPhoto from "../../assets/img/default-photo.png";
import IconLink from "../../components/IconLink/IconLink";
import {iconsDictionary} from "../../assets/icons/contacts/_iconsDictionary";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {TRootState} from "../../redux/reduxStore";
import LoaderIcon from "../../assets/loaders/loader";
import Posts from "./Posts/Posts";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import EditableText from "../../components/EditableText/EditableText";

const Profile = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams<{ id: string }>()
    const userId = Number(id);
    const [isLoading, setIsLoading] = useState(true);
    const profile = useSelector<TRootState, TActiveProfile>(state => state.profilePage.activeProfile)
    const isFetching = useSelector<TRootState, boolean>(state => state.profilePage.isFetching)
    const status = useSelector<TRootState, string>(state => state.profilePage.status)
    const myId = useSelector<TRootState, number>(state => state.auth.id)
    useEffect(() => {
        setIsLoading(true)
        if (userId && userId !== 0) {
            dispatch(getProfile(userId)).finally(() => setIsLoading(false));
        } else {
            setIsLoading(true)
            dispatch(setActiveProfile(presentationProfile))
            setTimeout(() => {
                setIsLoading(false)
                setIsLoading(false)
                dispatch(profileToggleLoader(false))
            }, 300)
        }
    }, [id])

    const setStatus = (newStatus: string) => dispatch(putStatus(newStatus))

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
        isLoading || isFetching
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
                        <SText>
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

export default Profile;
