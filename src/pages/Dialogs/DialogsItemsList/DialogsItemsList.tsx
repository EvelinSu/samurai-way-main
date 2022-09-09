import React, {FC} from 'react';
import DialogItem from "../DialogItem/DialogItem";
import {SDialogsItemsList} from "../styled";
import {TMessage} from "../../../redux/types";
import {TDialogs} from "../../../redux/dialogsReducer";
import {TUser} from "../../../redux/usersReducer";

type TDialogsItemsList = {
    dialogs: TDialogs
    messages: Array<TMessage>
    onClickHandler: (key: string) => void
    id: string
    users: Array<TUser>
}

const DialogsItemsList:FC<TDialogsItemsList> = ({dialogs, messages, onClickHandler, users, id}) => {
    return (
        <SDialogsItemsList>
            {users.map((user) => {
                return (
                    dialogs[user.id].messagesId.length > 0 &&
                    <DialogItem
                        onClick={() => onClickHandler(user.id)}
                        name={user.name}
                        avatar={user.avatar}
                        lastMessage={messages.find(
                            (el) => el.id === dialogs[user.id].messagesId[dialogs[user.id].messagesId.length - 1])}
                        isActive={id === user.id}
                        key={user.id}
                    />
                )
            })}
        </SDialogsItemsList>
    );
};

export default DialogsItemsList;
