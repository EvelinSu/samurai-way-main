import React, {useEffect} from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import Users from "./pages/Users/Users";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./layout/Sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "./redux/reduxStore";
import {getAuthThunk, TAuth} from "./redux/authReducer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";
import Modal from "./components/modal/Modal";

const App: React.FC = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthThunk())
    }, [])
    const auth = useSelector<TRootState, TAuth>(state => state.auth)

    return (
        <HashRouter>
            <SSiteWrapper>
                <GlobalLoader />
                <Sidebar />
                <SSiteContainer>
                    <Switch>
                        <Route path={`${PATH.profile}/:id?`} render={() => <Profile />} exact />
                        <Redirect from="/" to={PATH.profile + '/' + (auth.id || 0) } exact />
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
