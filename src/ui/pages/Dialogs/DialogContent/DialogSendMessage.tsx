import React from 'react';
import {STextarea} from "../../../common/Textarea/STextarea";
import Button from "../../../common/Button/Button";
import {changeNewMessageTextAC, sendMessageAC} from "../../../../bll/dialogsReducer";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/hooks";

type TDialogSendMessage = {
    id: string
    scrollToBottom: () => void
}

const DialogSendMessage: React.FC<TDialogSendMessage> = (props) => {

    const newMessageText = useAppSelector(state => state.dialogs.dialogsList[props.id].newMessageText)
    const dispatch = useAppDispatch()

    const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) return
        if (e.key === 'Enter') {
            e.preventDefault()
            addNewMessage()
        }
    }

    const addNewMessage = () => {
        if (newMessageText.trim() !== '') {
            dispatch(sendMessageAC({messageText: newMessageText.trim(), activeDialogKey: props.id}))
            dispatch(changeNewMessageTextAC({newMessageText: '', activeDialogKey: props.id}))
            props.scrollToBottom()
        }
    }
    const onChangeSetNewMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewMessageTextAC({newMessageText: e.currentTarget.value, activeDialogKey: props.id}))
    }

    return (
        <>
            <STextarea
                onKeyPress={onKeyPress}
                onChange={onChangeSetNewMessageText}
                value={newMessageText}
                height={"60px"}
                placeholder={"Write" +
                    " your message..."}
            />
            <Button
                isDisabled={newMessageText.trim() === ''}
                label={'Send'}
                onClick={addNewMessage}
            />
        </>

    );
};

export default DialogSendMessage;
