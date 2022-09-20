import React from "react";
import DialogContent from "./DialogContent";
import {connect} from "react-redux";
import {TRootState} from "../../../redux/reduxStore";
import {changeNewMessageTextAC, sendMessageAC, TDialogs} from "../../../redux/dialogsReducer";
import {Dispatch} from "redux";
import {TMessage} from "../../../redux/types";
import {TUser, users} from "../../../redux/usersReducer";


type TMapStateToProps = {
    dialogs: TDialogs
    messages: Array<TMessage>
    ownProps: TOwnProps,
    user?: TUser,
}

type TOwnProps = {
    id: string,

}

let mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.dialogsMessages,
        // user: state.usersPage.users.find(el => String(el.id) === ownProps.id),
        user: users.find(el => String(el.id) === ownProps.id),
        ownProps: {
            id: ownProps.id,
        }
    }
}

type TMapDispatchToProps = {
    changeNewMessageText: (text: string, id: string) => void
    sendMessage: (text: string, id: string) => void
}
let mapDispatchToProps = (dispatch: Dispatch): TMapDispatchToProps => {
    return {
        changeNewMessageText: (text, id) => dispatch(changeNewMessageTextAC(text, id)),
        sendMessage:  (text, id) => dispatch(sendMessageAC(text, id)),

    }
}

export const DialogContentContainer = connect(mapStateToProps, mapDispatchToProps)(DialogContent)
