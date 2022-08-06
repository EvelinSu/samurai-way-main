import React, {FC, useState} from 'react';
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
import {state} from "../../redux/state";

const Dialogs: FC<TDialogsProps> = () => {
    const [dialogs, setDialogs] = useState(state.dialogsPage)

    const {id} = useParams<{ id: string }>();
    const history = useHistory();
    return (
        <SDialogs>
            <SDialogContainer>
                {id ? (
                    <DialogContent
                        name={dialogs[id].name}
                        avatar={dialogs[id].avatar}
                        messages={dialogs[id].messages}
                    />
                ) : (
                    <SNoneDialog>
                        Выберите диалог
                    </SNoneDialog>
                )}
            </SDialogContainer>
            <SDialogsSidebar>
                <SDialogsItemsList>
                    {Object.entries(dialogs).map(([ key, value ]) => {
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