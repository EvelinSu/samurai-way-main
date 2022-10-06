import React, {useEffect, useState} from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import Users from "./pages/Users/Users";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./layout/Sidebar/Sidebar";
import {getAuthThunk, TAuth} from "./redux/authReducer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";
import Modal from "./components/modal/Modal";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {TRootState} from "./redux/reduxStore";

const App: React.FC = (props) => {
    const dispatch = useAppDispatch()
    const auth = useSelector<TRootState, TAuth>(state => state.auth)

    const [authId, setAuthId] = useState<string>()
    useEffect(() => {
        dispatch(getAuthThunk()).then(((res) =>  setAuthId(String(res))))
    }, [])

    return (
        <HashRouter>
            <SSiteWrapper>
                <GlobalLoader />
                <Sidebar />
                <SSiteContainer>
                    <Switch>
                        <Route path={`${PATH.profile}/:id?`} render={() => <Profile />} exact />
                        <Redirect from="/" to={PATH.users } exact />
                        <Route path={`${PATH.messages}/:id?`} render={() => <Dialogs />} exact />
                        <Route path={`${PATH.users}/:page?`} render={() => <Users />} exact />
                        <Route path={"*"} component={PageNotFound} exact />
                    </Switch>
                </SSiteContainer>
                <Modal type={"auth"} isOpened={auth.authModalToggle} />
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
