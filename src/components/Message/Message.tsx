import React, {FC} from 'react';
import {TMessageProps} from "./types";
import {
    SMessage,
    SMessageAvatar,
    SMessageContainer,
    SMessageContent,
    SMessageText,
    SMessageTime,
    SMessageTitle
} from "./styled";

const Message: FC<TMessageProps> = ({ text, time, me, name, avatar, ...props}) => {
    return (
        <SMessage isMine={me}>
            {avatar &&
                <SMessageAvatar src={avatar}/>
            }
            <SMessageContainer isMine={me}>
                {name &&
                    <SMessageTitle>{name}</SMessageTitle>
                }
                <SMessageContent>
                    <SMessageText>{text}</SMessageText>
                    <SMessageTime>{time}</SMessageTime>
                </SMessageContent>
            </SMessageContainer>
        </SMessage>
    );
};

export default Message;



