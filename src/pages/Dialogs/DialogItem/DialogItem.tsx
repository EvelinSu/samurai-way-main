import {SAvatar} from "../../../components/Avatar/SAvatar";
import {Box} from "../../../components/Box/Box";
import {SText} from "../../../components/Text/SText";
import React, {FC} from "react";
import {TMessage} from "../../../redux/types";
import {SDialogItem} from "./styled";

type TDialogItemProps = {
    name: string,
    avatar: string,
    isActive: boolean,
    lastMessage?: TMessage,
    onClick: () => void,
}

const DialogItem: FC<TDialogItemProps> = ({onClick, avatar, name, lastMessage, isActive}, ...props) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <SDialogItem onClick={() => onClickHandler()} isActive={isActive}>
            <SAvatar size={40} src={avatar} />
            <Box width={"100%"} gap={5} flexDirection={"column"} overflow={"hidden"}>
                <Box alignItems={"center"} justifyContent={"space-between"}>
                    <SText isEllipsis fontWeight={900}>
                        {name}
                    </SText>
                    <SText opacity={0.5}>
                        {lastMessage?.time}
                    </SText>
                </Box>
                <SText isEllipsis>
                    {lastMessage?.me && <SText opacity={0.4}>Me: </SText>}
                    {lastMessage?.text}
                </SText>
            </Box>
        </SDialogItem>
    )
}

export default DialogItem