import React from 'react';
import {SSiteContainer, SSiteContent, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/store";
import {TStore} from "./redux/types";

type TAppProps = {
    store: TStore
}

const App: React.FC <TAppProps> = ({store, ...props}) => {
    const profile = <Profile state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    const dialogs = <Dialogs state={store.getState()} dispatch={store.dispatch.bind(store)}/>

    return (
        <HashRouter>
            <SSiteWrapper>
                <SSiteContainer>
                    <Sidebar />
                    <SSiteContent>
                        <Switch>
                            <Route path={PATH.profile}  render={() => profile} exact />
                            <Redirect from="/" to={PATH.profile} exact/>
                            <Route path={`${PATH.messages}/:id?`} render={() => dialogs}  exact />
                            <Route path={"*"} component={PageNotFound} exact />
                        </Switch>
                    </SSiteContent>
                </SSiteContainer>
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
