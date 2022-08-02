import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {SText} from "../../../components/Text/SText";
import {SDialogItem} from "../styled";
import React, {FC} from "react";
import {TDialogItemProps} from "./types";

const DialogItem: FC<TDialogItemProps> = ({onClick, avatar, name, messages, isActive}, ...props) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <SDialogItem onClick={() => onClickHandler()} isActive={isActive}>
            <SAvatar size={40} src={avatar} />
            <SFlexBlock gap={5} flexDirection={"column"} overflow={"hidden"}>
                <SFlexBlock alignItems={"center"} justifyContent={"space-between"}>
                    <SText isEllipsis fontWeight={900}>
                        {name}
                    </SText>
                    <SText opacity={0.5}>
                        {messages && messages[messages.length - 1].time}
                    </SText>
                </SFlexBlock>
                <SText isEllipsis>
                    {messages && messages[messages.length - 1].text}
                </SText>
            </SFlexBlock>
        </SDialogItem>
    )
}

export default DialogItem