import {TMessage} from "../../../components/Message/types";
import {TRootState} from "../../../redux/state";

export type TDialogContentProps = {
    messages?: Array<TMessage>
    name: string,
    avatar: string,
    sendMessage: (text: string) => void
    newMessageText: string
    setNewMessageText: (text: string) => void

}
