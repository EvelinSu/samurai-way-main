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

const App: React.FC = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthThunk())
    }, [])
    const isAuth = useSelector<TRootState, boolean>(state => state.auth.isAuth)

    const profile = <Profile/>
    const users = <Users />
    const dialogs = <Dialogs />


    return (
        <HashRouter>
            <SSiteWrapper>
                <Sidebar />
                <SSiteContainer>
                    <Switch>
                        <Route path={`${PATH.profile}/:id?`} render={() => profile} exact />
                        <Redirect from="/" to={ isAuth ? PATH.profile : PATH.users} exact />
                        <Route path={`${PATH.messages}/:id?`} render={() => dialogs} exact />
                        <Route path={`${PATH.users}/:page?`} render={() => users} exact />
                        <Route path={"*"} component={PageNotFound} exact />
                    </Switch>
                </SSiteContainer>
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
