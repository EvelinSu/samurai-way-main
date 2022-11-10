import React, {useLayoutEffect} from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import UsersPage from "./pages/Users/UsersPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import Sidebar from "./layout/Sidebar/Sidebar";
import {getAuthThunk} from "./redux/authReducer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";
import Modal from "./components/modal/Modal";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import DialogsPage from "./pages/Dialogs/DialogsPage";
import {setPageSize} from "./redux/usersReducer";

const App = () => {
    const dispatch = useAppDispatch()
    const auth = useAppSelector(state => state.auth)
    const loader = useAppSelector(state => state.loader)

    useLayoutEffect(() => {
        dispatch(getAuthThunk())
    }, [])

    const windowHeight = window.innerHeight

    useLayoutEffect(() => {
        if (windowHeight > 1000) dispatch(setPageSize(20))
        if (windowHeight > 1300) dispatch(setPageSize(25))
    }, [windowHeight])

    return (
        <HashRouter>
            {loader.globalLoading
                ? <GlobalLoader />
                : <SSiteWrapper>
                    <Sidebar />
                    <SSiteContainer>
                        <Switch>
                            <Route path={`${PATH.profile}/:id?`} component={ProfilePage} exact />
                            <Redirect from={`/`} to={PATH.profile + '/' + auth.id} exact />
                            <Route path={`${PATH.messages}/:id?`} component={DialogsPage} exact />
                            <Route path={`${PATH.users}/:page?/:name?`} component={UsersPage} exact />
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
