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
import PagePanel from "../PagePanel";
import DialogsItemsList from "./DialogsItemsList/DialogsItemsList";
import {presentationUsers} from "../../redux/usersReducer";
import DialogContent from "./DialogContent/DialogContent";
import {useAppSelector} from "../../hooks/useAppDispatch";

type TDialogsProps = {}
const Dialogs: FC<TDialogsProps> = (props) => {

    const {id} = useParams<{ id: string }>();
    const history = useHistory();

    const auth = useAppSelector(state => state.auth)

    const state = useAppSelector(state => state.dialogsPage)
    const users= presentationUsers

    const onClickHandler = (key: string) => history.push(`${PATH.messages}/${key}`)

    return (
        <SSiteContent>
            <PagePanel title={auth.isAuth ? "Messages" : "Presentation messages"}>
                {/*<Input icon={<UserIcon/>} placeholder={"in progress..."}/>*/}
            </PagePanel>
            <SDialogs>
                <SDialogContainer justifyContent={id ? 'initial' : 'center'}>
                    {id
                        ? <DialogContent
                            id={id}
                            user={users.find(el => el.id === +id)}
                            messages={state.dialogsMessages}
                            dialogs={state.dialogs}

                        />
                        : <SNoneDialog>Select a chat </SNoneDialog>
                    }
                </SDialogContainer>
                <SDialogsSidebar>
                    <DialogsItemsList
                        id={id}
                        onClickHandler={onClickHandler}
                        dialogs={state.dialogs}
                        messages={state.dialogsMessages}
                        users={users}
                    />
                </SDialogsSidebar>
            </SDialogs>
        </SSiteContent>
    );
};

export default Dialogs;