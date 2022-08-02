import React, {FC} from 'react';
import {TDialog, TDialogsProps} from "./types";
import DialogItem from "./DialogItem/DialogItem";
import {useHistory, useParams} from "react-router-dom";
import {v1} from "uuid";
import {
    SDialogs,
    SDialogsItemsList, SDialogsSidebar,
    SDialogContainer,
    SNoneDialog
} from "./styled";
import DialogContent from "./DialogContent/DialogContent";

const Dialogs: FC<TDialogsProps> = () => {
    const {id} = useParams<{ id: string }>();
    const history = useHistory();
    return (
        <SDialogs>
            <SDialogContainer>
                {id ? (
                    <DialogContent
                        name={DialogsDictionary[id].name}
                        avatar={DialogsDictionary[id].avatar}
                        messages={DialogsDictionary[id].messages}
                    />
                ) : (
                    <SNoneDialog>
                        Выберите диалог
                    </SNoneDialog>
                )}
            </SDialogContainer>
            <SDialogsSidebar>
                <SDialogsItemsList>
                    {Object.entries(DialogsDictionary).map(([ key, value ]) => {
                        const {name, avatar, messages} = value;
                        return (
                            <DialogItem
                                onClick={() => history.push(`/messages/${key}`)}
                                name={name}
                                avatar={avatar}
                                messages={messages}
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

type Dictionary<T> = {
    [Key: string]: T;
}

const DialogsDictionary: Dictionary<TDialog> = {
    "1": {
        name: "Nick",
        avatar: "https://i.imgur.com/N3ErVCc.png",
        messages: [
            {
                id: v1(),
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: v1(),
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: v1(),
                text: "Lorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: v1(),
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: v1(),
                text: "Lorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: v1(),
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: v1(),
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: v1(),
                text: "consectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: v1(),
                text: "Lorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: v1(),
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: v1(),
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: v1(),
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
        ],

    },
    "2": {
        name: "name",
        avatar: "https://i.imgur.com/a2GuVCv.png",
        messages: [
            {
                id: v1(),
                text: "Lorem ipsum t amet,scing elitLorem ipsum dolor sit amet",
                time: "15:44",
                me: true,
            },
            {
                id: v1(),
                text: "olor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:24",
            },
        ],
    },
    "3": {
        name: "Text",
        avatar: "https://i.imgur.com/1Skz4Sj.png",
        messages: [
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:24",
                me: true,
            },
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:53",
            },
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:14",
            },
        ],

    }
}