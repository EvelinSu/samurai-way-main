import React, {FC} from 'react';
import {TDialogsProps} from "./types";
import DialogItem from "./DialogItem/DialogItem";
import {useHistory, useParams} from "react-router-dom";
import {
    SDialogs,
    SDialogsItemsList, SDialogsSidebar,
    SDialogContainer,
    SNoneDialog
} from "./styled";
import DialogContent from "./DialogContent/DialogContent";
import {changeNewMessageTextAC, PATH, sendMessageAC} from "../../redux/state";

const Dialogs: FC<TDialogsProps> = ({dispatch, state}) => {
    const dialogs = state.dialogsPage
    const messages = state.dialogsMessages

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const activeMessagesId = id ? dialogs[id].messagesId : "0"
    const activeMessages = messages.filter(el => activeMessagesId.includes(el.id))

    const onClickHandler = (key: string) => history.push(`${PATH.messages}/${key}`)
    const sendMessage = (text: string) => dispatch(sendMessageAC(text, id))
    const newMessageText = state.newMessageText
    const setNewMessageText = (text: string) =>  dispatch(changeNewMessageTextAC(text))

    return (
        <SDialogs>
            <SDialogContainer>
                {id ? (
                    <DialogContent
                        sendMessage={sendMessage}
                        name={dialogs[id].name}
                        avatar={dialogs[id].avatar}
                        messages={activeMessages}
                        newMessageText={newMessageText}
                        setNewMessageText={setNewMessageText}
                    />
                ) : (
                    <SNoneDialog>
                        Выберите диалог
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
                                lastMessage={messages.find(el => el.id === dialogs[key].messagesId[dialogs[key].messagesId.length -1])}
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