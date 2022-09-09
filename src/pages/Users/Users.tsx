import React, {useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import {BoxShadowContent, SUserBox, SUserName} from "./styled";
import {TUser} from "../../redux/usersReducer";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {Box} from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import {theme} from "../../styles/constants";

type TUsersProps = {
    users: Array<TUser>
    followToggle: (userId: string, isMyFollow: boolean) => void
    setUsers: (users: Array<TUser>) => void
}

const Users: React.FC<TUsersProps> = ({users, followToggle}) => {
    const onClickHandler = (userId: string, isMyFollow: boolean) => {
        followToggle(userId, isMyFollow)
    }

    const [isHovered, setIsHovered] = useState<string>()

    return (
        <SSiteContent>
            <Grid columns={"repeat(auto-fill, minmax(200px, 1fr))"}>
                {users.map(({name, id, avatar, description, isMyFollow}) => (
                    <SUserBox
                        key={id}
                        img={avatar}
                        onMouseEnter={() => (setIsHovered(id))}
                        onMouseLeave={() => setIsHovered('')}
                    >
                        <BoxShadowContent>
                            <SAvatar opacity={isHovered === id ? "0.4" : ''} src={avatar} />
                            <Box flexGrow={1} width={"100%"} flexDirection={"column"}>
                                <SUserName isHovered={isHovered === id}>{name}</SUserName>
                                {description}
                                <Box margin={"auto 0 0 0 "} justifyContent={"center"}>
                                    <Button
                                        backgroundColor={!isMyFollow ? theme.colors.button.active : theme.colors.button.cancel}
                                        label={isMyFollow ? 'unfollow' : 'follow'}
                                        onClick={() => onClickHandler(id, !isMyFollow)}
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
