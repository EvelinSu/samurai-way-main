import {Box} from "../../../common/Box/Box";
import {SText} from "../../../common/Text/SText";
import React, {FC, useCallback} from "react";
import {SDialogItem, SDialogItemHeader} from "./styled";
import UserIcon from "../../../assets/icons/UserIcon";
import defaultPhoto from '../../../assets/img/default-photo.png'
import {TMessage} from "../../../../bll/dialogsReducer";
import {useHistory, useParams} from "react-router-dom";
import {TUser} from "../../../../bll/usersReducer";
import {PATH} from "../../../../bll/types";
import Avatar from "../../../common/Avatar/Avatar";

type TDialogItemProps = {
    lastMessage?: TMessage,
    user: TUser
}

const DialogItem: FC<TDialogItemProps> = React.memo(({user, lastMessage}) => {

    const history = useHistory();
    const {id} = useParams<{ id: string }>();

    const onClickHandler = useCallback(() => {
        history.push(`${PATH.messages}/${user.id}`)
    }, [history])

    return (
        <SDialogItem
            onClick={onClickHandler}
            isActive={id === String(user.id)}
        >
            <Avatar
                size={"small"}
                img={user.photos.large || defaultPhoto}
            />
            <SDialogItemHeader>
                <Box
                    alignItems={"center"}
                    title={user.followed ? "my follow" : ''}
                    gap={"5px"}
                >
                    {user.followed && <UserIcon size={"14"} />}
                    <SText isEllipsis fontWeight={900}>
                        {user.name}
                    </SText>
                    <SText opacity={0.5} margin={"0 0 0 auto"}>
                        {lastMessage?.time}
                    </SText>
                </Box>
                <SText isEllipsis>
                    {lastMessage?.me && <SText opacity={0.4}>Me: </SText>}
                    {lastMessage?.text}
                </SText>
            </SDialogItemHeader>
        </SDialogItem>
    )
})

export default DialogItem