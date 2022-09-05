import React from 'react';
import store, {TRootState} from "../../../redux/reduxStore";
import {changeNewMessageTextAC, sendMessageAC} from "../../../redux/dialogsReduser";
import DialogSendMessage from "./DialogSendMessage";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type TMapStateToProps = {
    newMessageText: string
    ownProps: TOwnProps
}
type TOwnProps = {
    id: string,
}
export const mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => {
    return {
        newMessageText: state.dialogsPage.dialogs[ownProps.id].newMessageText,
        ownProps: {
            id: ownProps.id,
        }
    }
}

type TMapDispatchStateToProps = {
    setNewMessageText: (text: string) => void
    sendMessage: (text: string) => void
}
export const mapDispatchToProps = (dispatch: Dispatch, ownProps: TOwnProps): TMapDispatchStateToProps => {
    return {
        sendMessage: (text: string) => store.dispatch(sendMessageAC(text, ownProps.id)),
        setNewMessageText: (text: string) => store.dispatch(changeNewMessageTextAC(text, ownProps.id))
    }
}

export const DialogSendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogSendMessage)