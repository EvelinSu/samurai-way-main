import React, {FC, Fragment} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import {SText} from "../../../components/Text/SText";
import {SScrollContainer} from "../../../components/ScrollContainer/ScrollContainer";
import Message from "../../../components/Message/Message";
import {TMessage} from "../../../redux/types";
import {TDialogs} from "../../../redux/dialogsReduser";
import {DialogSendMessageContainer} from "./DialogSendMessageContainer";

type TDialogContentProps = {
    dialogs: TDialogs
    messages: TMessage[]
    id: string
}

const DialogContent: FC<TDialogContentProps> = ({
    dialogs,
    messages,
    id

}) => {

    const activeMessagesId = id ? dialogs[id].messagesId : "0"
    const activeMessages = messages.filter((el) => activeMessagesId.includes(el.id))

    return (
        <Fragment>
            <SDialogWindowHeader>
                <SAvatar size={40}
                         src={dialogs[id].avatar}
                />
                <SFlexBlock gap={1} flexDirection={"column"}>
                    <STitle>
                        {dialogs[id].name}
                    </STitle>
                    <SText opacity={0.5} fontSize={"14px"}>
                        last seen: {dialogs[id].lastSeen || 'recently'}
                    </SText>
                </SFlexBlock>
            </SDialogWindowHeader>
            <SDialogWindowBody>
                <SScrollContainer>
                    {
                        activeMessages
                            ? activeMessages.map((message) => (
                                <Message
                                    key={message.id}
                                    text={message.text}
                                    time={message.time}
                                    me={message.me}
                                />
                            ))
                            : 'none'
                    }
                </SScrollContainer>
            </SDialogWindowBody>
            <SDialogWindowFooter>
                <DialogSendMessageContainer id={id}/>
            </SDialogWindowFooter>
        </Fragment>
    );
};

export default DialogContent;

