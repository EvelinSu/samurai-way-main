import React, {FC, Fragment, useState} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import {SText} from "../../../components/Text/SText";
import {SScrollContainer} from "../../../components/ScrollContainer/ScrollContainer";
import Message from "../../../components/Message/Message";
import {TMessage} from "../../../redux/types";
import DialogSendMessageContainer from "./DialogSendMessageContainer";

type TDialogContentProps = {
    messages?: Array<TMessage>
    name: string,
    avatar: string,
    lastSeen: string,
    id: string
}

const DialogContent: FC<TDialogContentProps> = ({
    lastSeen,
    name,
    avatar,
    messages,
    id

}) => {


    return (
        <Fragment>
            <SDialogWindowHeader>
                <SAvatar size={40}
                         src={avatar}
                />
                <SFlexBlock gap={1} flexDirection={"column"}>
                    <STitle>
                        {name}
                    </STitle>
                    <SText opacity={0.5} fontSize={"14px"}>
                        last seen: {lastSeen || 'recently'}
                    </SText>
                </SFlexBlock>
            </SDialogWindowHeader>
            <SDialogWindowBody>
                <SScrollContainer>
                    {
                        messages
                            ? messages.map((message) => (
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

