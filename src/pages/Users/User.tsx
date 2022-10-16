import React, {useState} from 'react';
import {BoxShadowContent, SUserBox, SUserBoxHeader, SUserName, SUserStatus, SUserStatusText} from "./styled";
import {SAvatar} from "../../components/Avatar/SAvatar";
import userPhoto from "../../assets/img/default-photo.png";
import {Box} from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import {theme} from "../../styles/constants";
import {followToggleThunk, TUser} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authModalToggleAC} from "../../redux/authReducer";
import {useAppSelector} from "../../hooks/useAppDispatch";

type TUserProps = {
    user: TUser
    id: string
}

const User: React.FC<TUserProps> = ({user, id, ...props}) => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const followingInProgress = useAppSelector(state => state.usersPage.followingInProgress)

    const onClickHandler = (user: TUser) => {
        isAuth
            ? dispatch(followToggleThunk(user))
            : dispatch(authModalToggleAC(true))
    }

    const [isHovered, setIsHovered] = useState<string>('')


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
                            <SAvatar
                                size={'40px'}
                                src={userPhoto}
                            />
                        )}
                        <SUserName title={user.name} isHovered={isHovered === id}>{user.name}</SUserName>
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
                            onClick={() => onClickHandler(user)}
                        />
                    </Box>
                </Box>
            </BoxShadowContent>
        </SUserBox>
    );
};

export default User;
