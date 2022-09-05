import React, {FC} from 'react';
import DialogItem from "../DialogItem/DialogItem";
import {SDialogsItemsList} from "../styled";
import {TMessage} from "../../../redux/types";
import {TDialogs} from "../../../redux/dialogsReduser";

type TDialogsItemsList = {
    dialogs: TDialogs
    messages: Array<TMessage>
    onClickHandler: (key: string) => void
    id: string
}

const DialogsItemsList:FC<TDialogsItemsList> = ({dialogs, messages, onClickHandler, id}) => {
    return (
        <SDialogsItemsList>
            {Object.entries(dialogs).map(([key, value]) => {
                const {name, avatar} = value;
                return (
                    <DialogItem
                        onClick={() => onClickHandler(key)}
                        name={name}
                        avatar={avatar}
                        lastMessage={messages.find(
                            (el) => el.id === dialogs[key].messagesId[dialogs[key].messagesId.length - 1])}
                        isActive={id === key}
                        key={key}
                    />
                )
            })}
        </SDialogsItemsList>
    );
};

export default DialogsItemsList;
