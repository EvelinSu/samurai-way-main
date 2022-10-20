import React, {FC, Fragment} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {SAvatar} from "../../../components/Avatar/SAvatar";
import {Box} from "../../../components/Box/Box";
import {STitle} from "../../../components/Text/STitle";
import {SText} from "../../../components/Text/SText";
import Message from "../../../components/Message/Message";
import {TDialogs, TMessage} from "../../../redux/dialogsReducer";
import {TUser} from "../../../redux/usersReducer";
import DialogSendMessage from "./DialogSendMessage";
import ScrollBox from "../../../components/ScrollBox/ScrollBox";

type TDialogContentProps = {
    dialogs: TDialogs
    messages: TMessage[]
    id: string
    user?: TUser,
}

const DialogContent: FC<TDialogContentProps> = ({
    dialogs,
    messages,
    user,
    id

}) => {
    const activeMessagesId = id ? dialogs[id].messagesId : "0"
    const activeMessages = messages.filter((el) => activeMessagesId.includes(el.id))

    return (
        <Fragment>
            <SDialogWindowHeader>
                <SAvatar
                    size={40}
                    src={user && user.photos.small }
                />
                <Box gap={1} flexDirection={"column"}>
                    <STitle>
                        {user && user.name}
                    </STitle>
                    <SText opacity={0.5} fontSize={"14px"}>
                        last seen: {'recently'}
                    </SText>
                </Box>
            </SDialogWindowHeader>
            <SDialogWindowBody>
                <ScrollBox padding={20} overflowX={"hidden"}>
                    {
                        activeMessages.length > 0
                            ? activeMessages.map((message) => (
                                <Message
                                    key={message.id}
                                    text={message.text}
                                    time={message.time}
                                    me={message.me}
                                />
                            ))
                            : ''
                    }
                </ScrollBox>
            </SDialogWindowBody>
            <SDialogWindowFooter>
                <DialogSendMessage id={id} />
            </SDialogWindowFooter>
        </Fragment>
    );
};

export default DialogContent;

