import React, {useState} from 'react';
import {BoxShadowContent, SUserBox, SUserBoxHeader, SUserName, SUserStatus, SUserStatusText} from "./styled";
import {SAvatar} from "../../components/Avatar/SAvatar";
import userPhoto from "../../assets/img/default-photo.png";
import {Box} from "../../components/Box/Box";
import {SText} from "../../components/Text/SText";
import Button from "../../components/Button/Button";
import {theme} from "../../styles/constants";
import {TUser} from "../../redux/usersReducer";

type TUserProps = {
    user: TUser
    id: string
    onClickHandler: (id: string) => void
}

const User: React.FC<TUserProps> = ({user, id, onClickHandler}) => {

    const [isHovered, setIsHovered] = useState<string>('')

    return (
        <SUserBox
            key={user.id}
            img={user.photos.large}
            onMouseEnter={() => (setIsHovered(id))}
            onMouseLeave={() => (setIsHovered(''))}
        >
            <BoxShadowContent>
                <SUserBoxHeader>
                    <SAvatar
                        size={isHovered  === id && user.photos.large ? "0px" : '40px'}
                        opacity={isHovered === id && user.photos.large ? "0" : ''}
                        src={user.photos.large || userPhoto}
                    />
                    <SUserName isHovered={isHovered === id}>{user.name}</SUserName>
                </SUserBoxHeader>
                <Box flexGrow={1} width={"100%"} flexDirection={"column"}>
                    <SUserStatus>
                        {user.status
                            ? <SUserStatusText>{user.status}</SUserStatusText>
                            : <SUserStatusText opacity={0.3}>the user is silent</SUserStatusText>
                        }
                    </SUserStatus>
                    <Box margin={"auto 0 0 0 "} justifyContent={"center"}>
                        <Button
                            backgroundColor={!user.followed ? theme.colors.button.active : theme.colors.button.cancel}
                            label={user.followed ? 'unfollow' : 'follow'}
                            onClick={() => onClickHandler(id)}
                        />
                    </Box>
                </Box>
            </BoxShadowContent>
        </SUserBox>
    );
};

export default User;
