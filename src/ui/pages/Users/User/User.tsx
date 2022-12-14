import React, {useCallback, useState} from 'react';
import {BoxShadowContent, SUserBox, SUserBoxHeader, SUserName, SUserStatus, SUserStatusText} from "./styled";
import userPhoto from "../../../assets/img/default-photo.png";
import {Box} from "../../../common/Box/Box";
import Button from "../../../common/Button/Button";
import {NavLink} from "react-router-dom";
import {shallowEqual} from "react-redux";
import {authModalToggleAC} from "../../../../bll/authReducer";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks";
import Avatar from "../../../common/Avatar/Avatar";
import {followToggleThunk} from "../../../../bll/usersReducer";
import {TUser} from "../../../../dal/api/usersApi";
import {useTheme} from "styled-components";
import {TDefaultTheme} from "../../../styles/baseTheme";

type TUserProps = {
    user: TUser
    id: string
}

const User: React.FC<TUserProps> = React.memo(({user, id}) => {
    const dispatch = useAppDispatch()
    const theme = useTheme() as TDefaultTheme

    const [isHovered, setIsHovered] = useState<string>('')

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const followingInProgress = useAppSelector(state => state.users.followingInProgress, shallowEqual)

    const onClickHandler = useCallback((id: number, follow: boolean) => {
        isAuth
            ? dispatch(followToggleThunk(id, follow))
            : dispatch(authModalToggleAC(true))
    }, [isAuth])

    return (
        <SUserBox
            key={user.id}
            img={user.photos.large}
            onMouseEnter={() => (setIsHovered(id))}
            onMouseLeave={() => (setIsHovered(''))}
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
                        <SUserName title={user.name} isHovered={isHovered === id}>
                            {user.name}
                        </SUserName>
                    </SUserBoxHeader>
                </NavLink>
                <Box flexGrow={1} width={"100%"} flexDirection={"column"}>
                    <SUserStatus title={user.status}>
                        {user.status
                            ? <SUserStatusText>{user.status}</SUserStatusText>
                            : <SUserStatusText opacity={0.3}>the user is silent</SUserStatusText>
                        }
                    </SUserStatus>
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
    );
});

export default User;
