import React, {FC} from "react";

import DialogContent from "./DialogContent";
import StoreContext from "../../../StoreContext";

type TDialogContentContainerProps = {
    id: string

}

const DialogContentContainer: FC<TDialogContentContainerProps> = ({id}) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const dialogs = store.getState().dialogsPage.dialogs
                    const messages = store.getState().dialogsPage.dialogsMessages

                    const activeMessagesId = id ? dialogs[id].messagesId : "0"
                    const activeMessages = messages.filter((el) => activeMessagesId.includes(el.id))

                    return (
                        <DialogContent
                            name={dialogs[id].name}
                            lastSeen={dialogs[id].lastSeen}
                            avatar={dialogs[id].avatar}
                            messages={activeMessages}
                            id={id}
                        />
                    )
                }

            }
        </StoreContext.Consumer>

    );
};

export default DialogContentContainer;

