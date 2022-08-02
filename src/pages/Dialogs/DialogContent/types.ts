import {TMessageProps} from "../../../components/Message/types";

export type TDialogContentProps = {
    messages: Array<TMessageProps>
    name: string,
    avatar: string,
}