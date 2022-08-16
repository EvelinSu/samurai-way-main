import {TMessage} from "../../../components/Message/types";

export type TSDialogItemProps = {
    isActive: boolean,
}
export type TDialogItemProps = {
    name: string,
    avatar: string,
    isActive: boolean,
    lastMessage?: TMessage
    onClick: () => void
}
