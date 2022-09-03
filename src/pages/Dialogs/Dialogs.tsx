import React, {FC} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import {useHistory, useParams} from "react-router-dom";
import {
    SDialogs,
    SDialogsItemsList, SDialogsSidebar,
    SDialogContainer,
    SNoneDialog
} from "./styled";
import {PATH} from "../../redux/types";
import {SSiteContent} from "../../layout/styled";
import {TReduxStore, TRootState} from "../../redux/reduxStore";
import DialogContentContainer from "./DialogContent/DialogContentContainer";

type TDialogsProps = {
    state: TRootState
    store: TReduxStore
}
const Dialogs: FC<TDialogsProps> = ({store, state}) => {
    const dialogs = state.dialogsPage.dialogs
    const messages = state.dialogsPage.dialogsMessages

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const onClickHandler = (key: string) => history.push(`${PATH.messages}/${key}`)

    return (
        <SSiteContent>
            <SDialogs>
                <SDialogContainer>
                    {id ? (
                        <DialogContentContainer store={store} id={id} />
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
                                    lastMessage={messages.find(
                                        (el) => el.id === dialogs[key].messagesId[dialogs[key].messagesId.length - 1])}
                                    isActive={id === key}
                                    key={key}
                                />
                            )
                        })}
                    </SDialogsItemsList>
                </SDialogsSidebar>
            </SDialogs>
        </SSiteContent>
    );
};

export default Dialogs;