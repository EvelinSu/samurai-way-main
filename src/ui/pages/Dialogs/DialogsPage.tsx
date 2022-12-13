import React from 'react';
import {useParams} from "react-router-dom";
import {SDialogContainer, SDialogs, SDialogsSidebar, SNoneDialog} from "./styled";
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import DialogContent from "./DialogContent/DialogContent";
import {useAppSelector} from "../../../common/hooks";
import {shallowEqual} from "react-redux";
import {presentationUsers} from "../../../bll/demo/usersDemo";
import DialogItemList from "./DialogItemsList/DialogItemList";

const Dialogs = () => {

    const {id} = useParams<{ id: string }>();

    const {auth, dialogs} = useAppSelector(state => state, shallowEqual)
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
                            messages={dialogs.dialogsMessages}
                            dialogs={dialogs.dialogsList}
                        />
                        : <SNoneDialog>Select a chat </SNoneDialog>
                    }
                </SDialogContainer>
                <SDialogsSidebar>
                    <DialogItemList
                        dialogs={dialogs.dialogsList}
                        messages={dialogs.dialogsMessages}
                        users={users}
                    />
                </SDialogsSidebar>
            </SDialogs>
        </SSiteContent>
    );
};

export default Dialogs;