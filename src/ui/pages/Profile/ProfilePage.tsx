import React, {useLayoutEffect} from 'react';
import {SSiteContent} from "../../layout/styled";
import {getProfile} from "../../../bll/profileReducer";
import userPhoto from "../../assets/img/default-photo.png";
import {useParams} from "react-router-dom";
import LoaderIcon from "../../assets/loaders/loader";
import PostList from "./PostList/PostList";
import {useAppDispatch, useAppSelector} from "../../../common/hooks";
import {ProfileInfo} from "./ProfileInfo";

const ProfilePage = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams<{ id: string }>()
    const userId = Number(id);

    const activeProfile = useAppSelector(state => state.profile.activeProfile)
    const isFetching = useAppSelector(state => state.profile.isFetching)
    const myId = useAppSelector(state => state.auth.account.id)

    useLayoutEffect(() => {
        dispatch(getProfile(userId))
    }, [id])

    return (
        isFetching
            ? <LoaderIcon />
            : (<SSiteContent stylized>
                <ProfileInfo myId={myId} />
                <PostList
                    myId={myId}
                    name={activeProfile.fullName}
                    avatar={activeProfile.photos.small || userPhoto}
                />
            </SSiteContent>)

    );
};

export default ProfilePage;
