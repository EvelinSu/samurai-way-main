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
import {TDialog, TMessage} from "../../../redux/types";
import DialogContent from "./DialogContent";
import {changeNewMessageTextAC, sendMessageAC} from "../../../redux/dialogsReduser";
import {TReduxStore} from "../../../redux/reduxStore";

type TDialogContentContainerProps = {
    store: TReduxStore
    id: string

}

const DialogContentContainer: FC<TDialogContentContainerProps> = ({id, store}) => {

    const dialogs = store.getState().dialogsPage.dialogs
    const messages = store.getState().dialogsPage.dialogsMessages


    const sendMessage = (text: string) => store.dispatch(sendMessageAC(text, id))
    const setNewMessageText = (text: string) => store.dispatch(changeNewMessageTextAC(text, id))

    const activeMessagesId = id ? dialogs[id].messagesId : "0"
    const activeMessages = messages.filter((el) => activeMessagesId.includes(el.id))


    return (
        <DialogContent
            sendMessage={sendMessage}
            name={dialogs[id].name}
            lastSeen={dialogs[id].lastSeen}
            avatar={dialogs[id].avatar}
            messages={activeMessages}
            newMessageText={dialogs[id].newMessageText}
            setNewMessageText={setNewMessageText}
        />
    );
};

export default DialogContentContainer;

