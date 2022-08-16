import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {SText} from "../../../components/Text/SText";
import {SDialogItem} from "../styled";
import React, {FC} from "react";
import {TDialogItemProps} from "./types";

const DialogItem: FC<TDialogItemProps> = ({onClick, avatar, name, lastMessage, isActive}, ...props) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <SDialogItem onClick={() => onClickHandler()} isActive={isActive}>
            <SAvatar size={40} src={avatar} />
            <SFlexBlock width={"100%"} gap={5} flexDirection={"column"} overflow={"hidden"}>
                <SFlexBlock alignItems={"center"} justifyContent={"space-between"}>
                    <SText isEllipsis fontWeight={900}>
                        {name}
                    </SText>
                    <SText opacity={0.5}>
                        {lastMessage?.time}
                    </SText>
                </SFlexBlock>
                <SText isEllipsis>
                    {lastMessage?.me && <SText opacity={0.4}>Me: </SText>}
                    {lastMessage?.text}
                </SText>
            </SFlexBlock>
        </SDialogItem>
    )
}

export default DialogItem