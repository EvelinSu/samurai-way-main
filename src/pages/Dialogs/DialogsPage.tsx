import React from 'react';
import { useParams} from "react-router-dom";
import {
    SDialogs,
    SDialogsSidebar,
    SDialogContainer,
    SNoneDialog
} from "./styled";
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import DialogsItemsList from "./DialogsItemsList/DialogsItemsList";
import DialogContent from "./DialogContent/DialogContent";
import {useAppSelector} from "../../hooks/hooks";
import {shallowEqual} from "react-redux";
import {presentationUsers} from "../../redux/demo/usersDemo";

const Dialogs = () => {

    const {id} = useParams<{ id: string }>();

    const auth = useAppSelector(state => state.auth, shallowEqual)
    const state = useAppSelector(state => state.dialogs, shallowEqual)
    const users = presentationUsers


    return (
        <SSiteContent>
            <PagePanel title={auth.isAuth ? "Demo messages" : "Demo messages"}>
                {/*<Input icon={<UserIcon/>} placeholder={"in progress..."}/>*/}
            </PagePanel>
            <SDialogs>
                <SDialogContainer justifyContent={id ? 'initial' : 'center'}>
                    {id
                        ? <DialogContent
                            id={id}
                            user={users.find(el => el.id === +id)}
                            messages={state.dialogsMessages}
                            dialogs={state.dialogsList}
                        />
                        : <SNoneDialog>Select a chat </SNoneDialog>
                    }
                </SDialogContainer>
                <SDialogsSidebar>
                    <DialogsItemsList
                        dialogs={state.dialogsList}
                        messages={state.dialogsMessages}
                        users={users}
                    />
                </SDialogsSidebar>
            </SDialogs>
        </SSiteContent>
    );
};

export default Dialogs;