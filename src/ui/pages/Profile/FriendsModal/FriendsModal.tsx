import React, {FC, useEffect, useState} from 'react';
import {SModalWrapper} from "../../../modals/styled";
import {MegaShadow} from "../../../common/MegaShadow/MegaShadow";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks";
import {followToggleThunk, getUsersThunk} from "../../../../bll/usersReducer";
import Button from "../../../common/Button/Button";
import {shallowEqual} from "react-redux";
import {useTheme} from "styled-components";
import {TDefaultTheme} from "../../../styles/baseTheme";
import {BoxShadowContent, SUserBox, SUserBoxHeader, SUserName} from "../../Users/User/styled";
import {NavLink} from "react-router-dom";
import Avatar from "../../../common/Avatar/Avatar";
import userPhoto from "../../../assets/img/default-photo.png";
import {Box} from "../../../common/Box/Box";
import {Grid} from '../../../common/Grid/Grid';
import {SText} from "../../../common/Text/SText";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import LoaderIcon from "../../../assets/loaders/loader";

type TFriendsModalProps = {
    setIsFriendsModalOpen: (isOpen: boolean) => void
}

export const FriendsModal: FC<TFriendsModalProps> = (props) => {
    const dispatch = useAppDispatch()
    const theme = useTheme() as TDefaultTheme

    const [page, setPage] = useState(1)

    const users = useAppSelector(state => state.users.users)
    const isFetching = useAppSelector(state => state.app.isFetching)
    const totalUsersCount = useAppSelector(state => state.users.totalUsersCount)
    const followingInProgress = useAppSelector(state => state.users.followingInProgress, shallowEqual)

    const onShadowClickHandler = () => {
        props.setIsFriendsModalOpen(false)
    }

    const onClickHandler = (id: number, follow: boolean) => {
        dispatch(followToggleThunk(id, follow))
    }

    const totalPagesCount = Math.ceil(totalUsersCount / 20)

    useEffect(() => {
        dispatch(getUsersThunk({friend: true, count: 32, page: `${page}`}))
    }, [page])

    return (
        <MegaShadow onMouseDown={onShadowClickHandler}>
            <SModalWrapper width={"920px"} onMouseDown={(e) => e.stopPropagation()}>
                <Box justifyContent={"center"} margin={"0 0 20px 0"}>
                    <SText fontWeight={"500"} fontSize={"24px"}>
                        My friends
                    </SText>
                </Box>
                {users.length > 0 && !isFetching
                    ? <Grid columns={"repeat(auto-fill, minmax(200px, 1fr))"}>
                        {users.map(user => (
                            <SUserBox
                                key={user.id}
                                img={user.photos.large}
                            >
                                <BoxShadowContent>
                                    <NavLink to={'/profile/' + user.id}>
                                        <SUserBoxHeader>
                                            {!user.photos.large && (
                                                <Avatar
                                                    size={'small'}
                                                    img={userPhoto}
                                                />
                                            )}
                                            <SUserName title={user.name}>
                                                {user.name}
                                            </SUserName>
                                        </SUserBoxHeader>
                                    </NavLink>
                                    <Box flexGrow={1} width={"100%"} flexDirection={"column"}>
                                        <Box margin={"auto 0 0 0 "} justifyContent={"center"}>
                                            <Button
                                                isLoading={followingInProgress.includes(user.id)}
                                                backgroundColor={!user.followed ? theme.colors.button.active : theme.colors.button.cancel}
                                                label={user.followed ? 'unfollow' : 'follow'}
                                                onClick={() => onClickHandler(user.id, user.followed)}
                                            />
                                        </Box>
                                    </Box>
                                </BoxShadowContent>
                            </SUserBox>
                        ))}
                    </Grid>
                    : <Box
                        height={"200px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexGrow={1}
                    >
                        {isFetching ? <LoaderIcon /> : <SText opacity={0.2}> No friends yet</SText>}
                    </Box>
                }
                <Box justifyContent={"center"}>
                    <SText
                        isDisabled={page <= 1 || isFetching}
                        opacity={0.7}
                        onClick={() => setPage(page <= 1 ? page : page - 1)}
                    >
                        <ArrowIcon />
                    </SText>
                    <SText
                        isDisabled={page + 1 >= totalPagesCount || isFetching}
                        opacity={0.7}
                        onClick={() => setPage(page + 1 >= totalPagesCount ? page : page + 1)}
                    >
                        <ArrowIcon rotate={"180deg"} />
                    </SText>
                </Box>
            </SModalWrapper>
        </MegaShadow>
    );
};

