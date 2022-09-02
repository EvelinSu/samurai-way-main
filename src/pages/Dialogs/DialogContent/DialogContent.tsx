import React, {FC, Fragment, useState} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import {SText} from "../../../components/Text/SText";
import {SScrollContainer} from "../../../components/ScrollContainer/ScrollContainer";
import Message from "../../../components/Message/Message";
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import {TMessage} from "../../../redux/types";

type TDialogContentProps = {
    messages?: Array<TMessage>
    name: string,
    avatar: string,
    sendMessage: (text: string) => void
    newMessageText: string
    setNewMessageText: (text: string) => void
    lastSeen: string
}

const DialogContent: FC<TDialogContentProps> = ({lastSeen, name, avatar, messages, sendMessage, setNewMessageText, newMessageText}) => {
    const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && e.shiftKey) {
            return
        }
        if(e.key === 'Enter') {
            e.preventDefault()
            onClickHandler()
        }
    }

    const onClickHandler = () => {
        if(newMessageText.trim() !== '') {
            sendMessage(newMessageText.trim())
            setNewMessageText('')
        }
    }
    const onChangeSetNewMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessageText(e.currentTarget.value)
    }

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
                        messages ? messages.map((message) => (
                            <Message key={message.id}
                                     text={message.text}
                                     time={message.time}
                                     me={message.me}
                            />
                        )):'none'
                    }
                </SScrollContainer>
            </SDialogWindowBody>
            <SDialogWindowFooter>
                <STextarea onKeyPress={onKeyPress} onChange={onChangeSetNewMessageText} value={newMessageText} height={"60px"} placeholder={"Write" +
                    " your message..."} />
                <Button isDisabled={newMessageText.trim() === ''} label={'Send'} onClick={onClickHandler}/>
            </SDialogWindowFooter>
        </Fragment>
    );
};

export default DialogContent;

