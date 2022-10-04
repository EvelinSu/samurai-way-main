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
import {getAuthThunk} from "./redux/authReducer";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader";

const App: React.FC = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthThunk())
    }, [])
    const isAuth = useSelector<TRootState, boolean>(state => state.auth.isAuth)

    return (
        <HashRouter>
            <SSiteWrapper>
                <GlobalLoader />
                <Sidebar />
                <SSiteContainer>
                    {isAuth
                        ? <Switch>
                            <Route path={`${PATH.profile}/:id?`} render={() => <Profile />} exact />
                            <Redirect from="/" to={PATH.profile} exact />
                            <Route path={`${PATH.messages}/:id?`} render={() => <Dialogs />} exact />
                            <Route path={`${PATH.users}/:page?`} render={() => <Users />} exact />
                            <Route path={"*"} component={PageNotFound} exact />
                        </Switch>
                        : <Switch>
                            <Redirect from={PATH.profile + '/0'} to={PATH.users} exact />
                            <Route path={`${PATH.profile}/:id`} render={() => <Profile />} exact />
                            <Redirect path={`${PATH.messages}/:id?`} to={PATH.users} exact />
                            <Route path={`${PATH.users}/:page?`} render={() => <Users />} exact />
                            <Route path={"*"} component={PageNotFound} exact />
                        </Switch>
                    }
                </SSiteContainer>
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
