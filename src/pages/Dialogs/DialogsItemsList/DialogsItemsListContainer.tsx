import React from 'react';
import StoreContext from "../../../StoreContext";
import DialogsItemsList from "./DialogsItemsList";

type TDialogsItemsListContainer = {
    id: string
    onClickHandler: (key: string) => void
}

const DialogsItemsListContainer: React.FC<TDialogsItemsListContainer> = ({id, onClickHandler}) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState()
                    const dialogs = state.dialogsPage.dialogs
                    const messages = state.dialogsPage.dialogsMessages
                    return (
                        <DialogsItemsList
                            dialogs={dialogs}
                            messages={messages}
                            id={id}
                            onClickHandler={onClickHandler}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsItemsListContainer;
