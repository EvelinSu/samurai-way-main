import {TMessage} from "../../../components/Message/types";

export type TDialogContentProps = {
    messages?: Array<TMessage>
    name: string,
    avatar: string,
    callback: (text: string) => void

}
