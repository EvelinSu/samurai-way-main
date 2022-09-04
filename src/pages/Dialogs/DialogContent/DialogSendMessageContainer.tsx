import React from 'react';
import {STextarea} from "../../../components/Textarea/STextarea";
import Button from "../../../components/Button/Button";
import StoreContext from "../../../StoreContext";
import store from "../../../redux/reduxStore";
import {changeNewMessageTextAC, sendMessageAC} from "../../../redux/dialogsReduser";
import DialogSendMessage from "./DialogSendMessage";
import dialogs from "../Dialogs";

type TDialogSendMessageContainer = {
    id: string
}

const DialogSendMessageContainer: React.FC<TDialogSendMessageContainer> = ({id}) => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const sendMessage = (text: string) => store.dispatch(sendMessageAC(text, id))
                    const setNewMessageText = (text: string) => store.dispatch(changeNewMessageTextAC(text, id))
                    const newMessageText = store.getState().dialogsPage.dialogs[id].newMessageText

                    return (
                        <DialogSendMessage
                            newMessageText={newMessageText}
                            setNewMessageText={setNewMessageText}
                            sendMessage={sendMessage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogSendMessageContainer;
