import React, {FC} from 'react';
import DialogItem from "../DialogItem/DialogItem";
import {SDialogsItemsList} from "../styled";
import {TDialogs, TMessage} from "../../../../bll/dialogsReducer";
import {TUser} from "../../../../bll/usersReducer";

type TDialogsItemsList = {
    dialogs: TDialogs
    messages: Array<TMessage>
    users: Array<TUser>
}

const DialogsItemsList:FC<TDialogsItemsList> = ({dialogs, messages, users}) => {

    return (
        <SDialogsItemsList>
            {users.map((user) => {
                let messagesId = dialogs[user.id]?.messagesId || ''
                return (
                    (messagesId.length > 0 || user.followed) &&
                    <DialogItem
                        key={user.id}
                        user={user}
                        lastMessage={messages.find(
                            (el) => el.id === messagesId[messagesId.length - 1] || '')}
                    />
                )
            })}
        </SDialogsItemsList>
    );
};

export default DialogsItemsList;
