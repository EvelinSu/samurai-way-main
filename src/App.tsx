import React, {useEffect} from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import Users from "./pages/Users/Users";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./layout/Sidebar/Sidebar";
import {getAuthThunk, TAuth} from "./redux/authReducer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";
import Modal from "./components/modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "./hooks/useAppDispatch";

const App: React.FC = (props) => {
    const dispatch = useDispatch()
    const auth = useAppSelector(state => state.auth)
    const loader = useAppSelector(state => state.loader)

    useEffect(() => {
        dispatch(getAuthThunk())
    }, [])

    return (
        <HashRouter>
            {loader.globalLoading
                ? <GlobalLoader />
                : <SSiteWrapper>
                    <Sidebar />
                    <SSiteContainer>
                        <Switch>
                            <Route path={`${PATH.profile}/:id?`} render={() => <Profile />} exact />
                            <Redirect from="/" to={PATH.profile + '/' + auth.id} exact />
                            <Route path={`${PATH.messages}/:id?`} render={() => <Dialogs />} exact />
                            <Route path={`${PATH.users}/:page?/:name?`} render={() => <Users />} exact />
                            <Route path={"*"} component={PageNotFound} exact />
                        </Switch>
                    </SSiteContainer>
                    <Modal type={"auth"} isOpened={auth.authModalToggle} />
                </SSiteWrapper>
            }
        </HashRouter>
    );
}

export default App;
