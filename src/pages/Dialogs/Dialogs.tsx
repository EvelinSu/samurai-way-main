import React, {FC} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import {useHistory, useParams} from "react-router-dom";
import {
    SDialogs,
    SDialogsItemsList, SDialogsSidebar,
    SDialogContainer,
    SNoneDialog
} from "./styled";
import DialogContent from "./DialogContent/DialogContent";
import {PATH} from "../../redux/store";
import {changeNewMessageTextAC, sendMessageAC} from "../../redux/dialogsReduser";
import {TActions, TRootState} from "../../redux/types";

type TDialogsProps = {
    state: TRootState
    dispatch: (action: TActions) => void
}
const Dialogs: FC<TDialogsProps> = ({dispatch, state}) => {
    const dialogs = state.dialogsPage.dialogs
    const messages = state.dialogsPage.dialogsMessages

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const activeMessagesId = id ? dialogs[id].messagesId : "0"
    const activeMessages = messages.filter((el) => activeMessagesId.includes(el.id))

    const onClickHandler = (key: string) => history.push(`${PATH.messages}/${key}`)
    const sendMessage = (text: string) => dispatch(sendMessageAC(text, id))
    const newMessageText = state.dialogsPage.newMessageText
    const setNewMessageText = (text: string) =>  dispatch(changeNewMessageTextAC(text))

    return (
        <SDialogs>
            <SDialogContainer>
                {id ? (
                    <DialogContent
                        sendMessage={sendMessage}
                        name={dialogs[id].name}
                        lastSeen={dialogs[id].lastSeen}
                        avatar={dialogs[id].avatar}
                        messages={activeMessages}
                        newMessageText={newMessageText}
                        setNewMessageText={setNewMessageText}
                    />
                ) : (
                    <SNoneDialog>
                        Select a chat
                    </SNoneDialog>
                )}
            </SDialogContainer>
            <SDialogsSidebar>
                <SDialogsItemsList>
                    {Object.entries(dialogs).map(([key, value]) => {
                        const {name, avatar} = value;
                        return (
                            <DialogItem
                                onClick={() => onClickHandler(key)}
                                name={name}
                                avatar={avatar}
                                lastMessage={messages.find((el) => el.id === dialogs[key].messagesId[dialogs[key].messagesId.length -1])}
                                isActive={id === key}
                                key={key}
                            />
                        )
                    })}
                </SDialogsItemsList>
            </SDialogsSidebar>
        </SDialogs>
    );
};

export default Dialogs;