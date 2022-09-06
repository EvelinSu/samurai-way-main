import React from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import {UsersContainer} from "./pages/Users/UsersContainer";

const App: React.FC = (props) => {
    const profile = <Profile />
    const users = <UsersContainer />
    const dialogs = <Dialogs />

    return (
        <HashRouter>
            <SSiteWrapper>
                <Sidebar />
                <SSiteContainer>
                    <Switch>
                        <Route path={PATH.profile} render={() => profile} exact />
                        <Redirect from="/" to={PATH.profile} exact />
                        <Route path={`${PATH.messages}/:id?`} render={() => dialogs} exact />
                        <Route path={`${PATH.users}/:id?`} render={() => users} exact />
                        <Route path={"*"} component={PageNotFound} exact />
                    </Switch>
                </SSiteContainer>
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
