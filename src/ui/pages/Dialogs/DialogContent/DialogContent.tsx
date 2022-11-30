import React, {FC, Fragment, useEffect, useRef} from "react";
import {SDialogWindowBody, SDialogWindowFooter, SDialogWindowHeader} from "../styled";
import {Box} from "../../../common/Box/Box";
import {STitle} from "../../../common/Text/STitle";
import {SText} from "../../../common/Text/SText";
import Message from "../../../common/Message/Message";
import {TDialogs, TMessage} from "../../../../bll/dialogsReducer";
import {TUser} from "../../../../bll/usersReducer";
import DialogSendMessage from "./DialogSendMessage";
import {SScrollBox, SScrollBoxWrapper} from "../../../common/ScrollBox/ScrollBox";
import defaultPhoto from "../../../assets/img/default-photo.png"
import Avatar from "../../../common/Avatar/Avatar";

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

    const dialogsBody = useRef(null)

    useEffect(() => {
        // @ts-ignore
        dialogsBody.current?.scrollTo({top: document.body.scrollHeight})
    }, [id])

    const scrollToBottom = () => {
        setTimeout(() => {
            // @ts-ignore
            dialogsBody.current?.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }, 0)
    }

    return (
        <Fragment>
            <SDialogWindowHeader>
                <Avatar
                    size={"small"}
                    img={user?.photos.small || defaultPhoto}
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
                <SScrollBoxWrapper  >
                    <SScrollBox padding={20} overflowX={"hidden"} ref={dialogsBody}>
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
                    </SScrollBox>
                </SScrollBoxWrapper>
            </SDialogWindowBody>
            <SDialogWindowFooter>
                <DialogSendMessage id={id} scrollToBottom={scrollToBottom} />
            </SDialogWindowFooter>
        </Fragment>
    );
};

export default DialogContent;

