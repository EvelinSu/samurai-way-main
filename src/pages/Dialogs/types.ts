import {Dictionary} from "../../redux/state";
import {TMessage} from "../../components/Message/types";

export type TDialog = {
    name: string,
    messagesId: Array<string>,
    avatar: string
}

export type TDialogsProps = {
    dialogs: Dictionary<TDialog>
    messages: Array<TMessage>
    sendMessage: (text: string, id: string) => void

}