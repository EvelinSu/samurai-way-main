import {TPost} from "./Posts/types";
import {TActions, TRootState} from "../../redux/state";

export type TProfileProps = {
    dispatch: (action: TActions) => void
    state: TRootState
}