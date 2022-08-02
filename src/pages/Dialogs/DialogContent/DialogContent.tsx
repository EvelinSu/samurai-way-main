import React, {FC, Fragment} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {SAvatar} from "../../../components/Avatar/SAvatar";
import {SFlexBlock} from "../../../components/FlexBlock/SFlexBlock";
import {STitle} from "../../../components/Text/STitle";
import {SText} from "../../../components/Text/SText";
import {SScrollContainer} from "../../../components/ScrollContainer/ScrollContainer";
import Message from "../../../components/Message/Message";
import {STextarea} from "../../../components/Textarea/STextarea";
import {TDialogContentProps} from "./types";


const DialogContent: FC<TDialogContentProps> = ({name, avatar, messages}) => {
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
                        messages.map((message) => (
                            <Message key={message.id}
                                     text={message.text}
                                     time={message.time}
                                     me={message.me}
                            />
                        ))
                    }
                </SScrollContainer>
            </SDialogWindowBody>
            <SDialogWindowFooter>
                <STextarea height={"60px"} placeholder={"Написать сообщение"} />
            </SDialogWindowFooter>
        </Fragment>
    );
};

export default DialogContent;

