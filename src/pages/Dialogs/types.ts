import {TMessageProps} from "../../components/Message/types";

export type TDialog = {
    name: string,
    messages: Array<TMessageProps>,
    avatar: string
}

export type TDialogsProps = {}