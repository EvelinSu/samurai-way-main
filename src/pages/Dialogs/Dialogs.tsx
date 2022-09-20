import React, {FC} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {
    SDialogs,
    SDialogsSidebar,
    SDialogContainer,
    SNoneDialog
} from "./styled";
import {PATH} from "../../redux/types";
import {SSiteContent} from "../../layout/styled";
import {DialogContentContainer} from "./DialogContent/DialogContentContainer";
import {DialogsItemsListContainer} from "./DialogsItemsList/DialogsItemsListContainer";
import PagePanel from "../PagePanel";

type TDialogsProps = {}
const Dialogs: FC<TDialogsProps> = (props) => {

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const onClickHandler = (key: string) => history.push(`${PATH.messages}/${key}`)

    return (
        <SSiteContent>
            <PagePanel title="Messages">
            </PagePanel>
            <SDialogs>
                <SDialogContainer justifyContent={id ? 'initial' : 'center'}>
                    {id
                        ? <DialogContentContainer id={id} />
                        : <SNoneDialog>Select a chat </SNoneDialog>
                    }
                </SDialogContainer>
                <SDialogsSidebar>
                    <DialogsItemsListContainer id={id} onClickHandler={onClickHandler} />
                </SDialogsSidebar>
            </SDialogs>
        </SSiteContent>
    );
};

export default Dialogs;