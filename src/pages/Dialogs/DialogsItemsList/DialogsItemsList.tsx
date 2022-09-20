import React, {FC} from 'react';
import DialogItem from "../DialogItem/DialogItem";
import {SDialogsItemsList} from "../styled";
import {TMessage} from "../../../redux/types";
import {TDialogs} from "../../../redux/dialogsReducer";
import {TUser, users} from "../../../redux/usersReducer";

type TDialogsItemsList = {
    dialogs: TDialogs
    messages: Array<TMessage>
    onClickHandler: (key: string) => void
    id: string
    // users: Array<TUser>
}

const DialogsItemsList:FC<TDialogsItemsList> = ({dialogs, messages, onClickHandler,  id}) => {
    return (
        <SDialogsItemsList>
            {users.map((user) => {
                let messagesId = dialogs[user.id]?.messagesId || ''
                return (
                    (messagesId.length > 0 || user.followed) &&
                    <DialogItem
                        onClick={() => onClickHandler(String(user.id))}
                        name={user.name}
                        avatar={user.photos.small}
                        isMyFollow={user.followed}
                        lastMessage={messages.find(
                            (el) => el.id === messagesId[messagesId.length - 1] || '')}
                        isActive={id === String(user.id)}
                        key={user.id}
                    />
                )
            })}
        </SDialogsItemsList>
    );
};

export default DialogsItemsList;
