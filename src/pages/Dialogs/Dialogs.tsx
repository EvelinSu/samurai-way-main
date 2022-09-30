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
import Input from "../../components/Form/Input";
import UserIcon from "../../assets/icons/UserIcon";

type TDialogsProps = {}
const Dialogs: FC<TDialogsProps> = (props) => {

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const onClickHandler = (key: string) => history.push(`${PATH.messages}/${key}`)

    return (
        <SSiteContent>
            <PagePanel title="Messages">
                <Input icon={<UserIcon/>} placeholder={"Search..."}/>
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