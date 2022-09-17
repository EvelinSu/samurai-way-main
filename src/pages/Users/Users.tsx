import React, {useEffect, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import {BoxShadowContent, SUserBox, SUserName, SUserStatus, SUserStatusText} from "./styled";
import {TUser} from "../../redux/usersReducer";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {Box} from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import {theme} from "../../styles/constants";
import axios from "axios";
import userPhoto from "../../../src/assets/img/default-photo.png"
import {SText} from "../../components/Text/SText";

type TUsersProps = {
    users: Array<TUser>
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
}

const Users: React.FC<TUsersProps> = ({users, followToggle, ...props}) => {
    const onClickHandler = (userId: string) => {
        followToggle(userId)
    }

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }, [])


    const [isHovered, setIsHovered] = useState<string>()

    return (
        <SSiteContent>
            <Grid columns={"repeat(auto-fill, minmax(200px, 1fr))"}>
                {users.map((user) => (
                    <SUserBox
                        key={user.id}
                        img={user.photos.large}
                        onMouseEnter={() => (setIsHovered(String(user.id)))}
                        onMouseLeave={() => setIsHovered('')}
                    >
                        <BoxShadowContent>
                            <SAvatar opacity={isHovered === String(user.id) ? "0.4" : ''} src={user.photos.large || userPhoto} />
                            <Box flexGrow={1} width={"100%"} flexDirection={"column"}>
                                <SUserName isHovered={isHovered === String(user.id)}>{user.name}</SUserName>
                                <SUserStatus>
                                    {user.status
                                        ? <SUserStatusText>{user.status}</SUserStatusText>
                                        : <SText opacity={0.3}>the user is silent</SText>
                                    }
                                </SUserStatus>
                                <Box margin={"auto 0 0 0 "} justifyContent={"center"}>
                                    <Button
                                        backgroundColor={!user.followed ? theme.colors.button.active : theme.colors.button.cancel}
                                        label={user.followed ? 'unfollow' : 'follow'}
                                        onClick={() => onClickHandler(String(user.id))}
                                    />
                                </Box>
                            </Box>
                        </BoxShadowContent>
                    </SUserBox>
                ))}
            </Grid>
        </SSiteContent>
    );
};

export default Users;
