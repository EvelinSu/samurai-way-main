import React, {FC, Fragment, useState} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import {SText} from "../../../components/Text/SText";
import {SScrollContainer} from "../../../components/ScrollContainer/ScrollContainer";
import Message from "../../../components/Message/Message";
import {STextarea} from "../../../components/Textarea/STextarea";
import {TDialogContentProps} from "./types";
import Button from "../../../components/Button/Button";
import {TMessage} from "../../../components/Message/types";


const DialogContent: FC<TDialogContentProps> = ({name, avatar, messages, callback}) => {
    const [inputText, setInputText] = useState('')
    const onClickHandler = () => {
        if(inputText) {
            callback(inputText)
            setInputText('')
        }
    }
    const onChangeSetInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.currentTarget.value)
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
                        Последняя активность: сегодня
                    </SText>
                </SFlexBlock>
            </SDialogWindowHeader>
            <SDialogWindowBody>
                <SScrollContainer>
                    {
                        messages ? messages.map((message: TMessage) => (
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
                <STextarea onChange={onChangeSetInputText} value={inputText} height={"60px"} placeholder={"Write" +
                    " your message..."} />
                <Button isDisabled={!inputText} label={'Send'} onClick={onClickHandler}/>
            </SDialogWindowFooter>
        </Fragment>
    );
};

export default DialogContent;

