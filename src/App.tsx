import React, {useEffect, useState} from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import UsersContainer from "./pages/Users/UsersContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import SidebarContainer from "./layout/Sidebar/SidebarContainer";
import axios from "axios";

const App: React.FC = (props) => {
    const [myId, setMyId] = useState()
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
            setMyId(response.data.data.id)
        })
    }, [])

    const profile = <ProfileContainer myId={myId}/>
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
                        <Route path={`${PATH.users}`} render={() => users} exact />
                        <Route path={"*"} component={PageNotFound} exact />
                    </Switch>
                </SSiteContainer>
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
