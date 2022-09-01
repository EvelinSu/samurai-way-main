import {Dictionary, TActions, TRootState, TStore} from "../../redux/state";
import {TMessage} from "../../components/Message/types";

export type TDialog = {
    name: string,
    messagesId: Array<string>,
    avatar: string
}

export type TDialogsProps = {
    state: TRootState
    dispatch: (action: TActions) => void

}