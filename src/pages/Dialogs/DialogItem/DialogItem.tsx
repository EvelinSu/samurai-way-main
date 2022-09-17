import {SAvatar} from "../../../components/Avatar/SAvatar";
import {Box} from "../../../components/Box/Box";
import {SText} from "../../../components/Text/SText";
import React, {FC} from "react";
import {TMessage} from "../../../redux/types";
import {SDialogItem, SDialogItemHeader} from "./styled";
import UserIcon from "../../../assets/icons/UserIcon";

type TDialogItemProps = {
    name: string,
    avatar: string,
    isActive: boolean,
    lastMessage?: TMessage,
    onClick: () => void,
    isMyFollow: boolean
}

const DialogItem: FC<TDialogItemProps> = ({isMyFollow, onClick, avatar, name, lastMessage, isActive}, ...props) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <SDialogItem onClick={() => onClickHandler()} isActive={isActive}>
            <SAvatar size={40} src={avatar} />
            <SDialogItemHeader>
                <Box alignItems={"center"} title={isMyFollow ? "my follow" : ''} gap={"5px"}>
                    {isMyFollow && <UserIcon size={"14"} />}
                    <SText isEllipsis fontWeight={900}>
                        {name}
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
}

export default DialogItem