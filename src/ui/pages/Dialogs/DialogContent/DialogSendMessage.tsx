import React from 'react';
import {STextarea} from "../../../common/Textarea/STextarea";
import Button from "../../../common/Button/Button";
import {changeNewMessageTextAC, sendMessageAC} from "../../../../bll/dialogsReducer";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks";

type TDialogSendMessage = {
    id: string
    scrollToBottom: () => void
}

const DialogSendMessage: React.FC<TDialogSendMessage> = (props) => {
    const dispatch = useAppDispatch()

    const newMessageText = useAppSelector(state => state.dialogs.dialogsList[props.id].newMessageText)

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) return
        if (e.key === 'Enter') {
            e.preventDefault()
            addNewMessageHandler()
        }
    }

    const addNewMessageHandler = () => {
        if (newMessageText.trim() !== '') {
            dispatch(sendMessageAC({messageText: newMessageText.trim(), activeDialogKey: props.id}))
            dispatch(changeNewMessageTextAC({newMessageText: '', activeDialogKey: props.id}))
            props.scrollToBottom()
        }
    }
    const onChangeNewMessageTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewMessageTextAC({newMessageText: e.currentTarget.value, activeDialogKey: props.id}))
    }

    return (
        <>
            <STextarea
                onKeyPress={onKeyPressHandler}
                onChange={onChangeNewMessageTextHandler}
                value={newMessageText}
                height={"60px"}
                placeholder={"Write" +
                    " your message..."}
            />
            <Button
                isDisabled={newMessageText.trim() === ''}
                label={'Send'}
                onClick={addNewMessageHandler}
            />
        </>

    );
};

export default DialogSendMessage;
