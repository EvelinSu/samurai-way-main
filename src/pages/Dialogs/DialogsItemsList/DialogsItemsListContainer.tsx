import React from 'react';
import DialogsItemsList from "./DialogsItemsList";
import {TRootState} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {TDialogs} from "../../../redux/dialogsReducer";
import {TMessage} from "../../../redux/types";
import {presentationUsers, TUser} from "../../../redux/usersReducer";


type TMapStateToProps = {
    dialogs: TDialogs
    messages: Array<TMessage>
    ownProps: TOwnProps
    users: Array<TUser>
}

type TOwnProps = {
    onClickHandler: (key: string) => void
    id: string
}
export const mapStateToProps = (state: TRootState, ownProps: TOwnProps): TMapStateToProps => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.dialogsMessages,
        users: state.usersPage.users.length  ? state.usersPage.users : [...presentationUsers],
        ownProps: {
            id: ownProps.id,
            onClickHandler: ownProps.onClickHandler
        }
    }
}

type TMapDispatchStateToProps = {

}
export const mapDispatchToProps = (dispatch: Dispatch): TMapDispatchStateToProps => {
    return {

    }
}

export const DialogsItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsItemsList)