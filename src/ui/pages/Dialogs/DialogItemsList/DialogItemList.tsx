import React, {FC} from 'react';
import DialogItem from "../DialogItem/DialogItem";
import {SDialogItemList} from "../styled";
import {TDialogs, TMessage} from "../../../../bll/dialogsReducer";
import {TUser} from "../../../../dal/api/usersApi";

type TDialogsItemsList = {
    dialogs: TDialogs
    messages: Array<TMessage>
    users: Array<TUser>
}

const DialogItemList: FC<TDialogsItemsList> = ({dialogs, messages, users}) => {

    return (
        <SDialogItemList>
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
        </SDialogItemList>
    );
};

export default DialogItemList;
