import React from 'react';
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";

type TDialogSendMessage = {
    newMessageText: string
    setNewMessageText: (text: string) => void
    sendMessage: (text: string) => void

}

const DialogSendMessage: React.FC<TDialogSendMessage> = ({newMessageText, setNewMessageText, sendMessage}) => {

    const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) return
        if (e.key === 'Enter') {
            e.preventDefault()
            onClickHandler()
        }
    }

    const onClickHandler = () => {
        if (newMessageText.trim() !== '') {
            sendMessage(newMessageText.trim())
            setNewMessageText('')
        }
    }
    const onChangeSetNewMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessageText(e.currentTarget.value)
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
            <Button isDisabled={newMessageText.trim() === ''} label={'Send'} onClick={onClickHandler} />
        </>

    );
};

export default DialogSendMessage;
