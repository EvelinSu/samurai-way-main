import React from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import UsersContainer from "./pages/Users/UsersContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import SidebarContainer from "./layout/Sidebar/SidebarContainer";

const App: React.FC = (props) => {

    const profile = <ProfileContainer/>
    const users = <UsersContainer />
    const dialogs = <Dialogs />

    return (
        <HashRouter>
            <SSiteWrapper>
                <SidebarContainer />
                <SSiteContainer>
                    <Switch>
                        <Route path={`${PATH.profile}/:id?`} render={() => profile} exact />
                        <Redirect from="/" to={PATH.profile} exact />
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
