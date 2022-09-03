import React from 'react';
import {SSiteContainer, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH} from "./redux/types";
import {TReduxStore} from "./redux/reduxStore";

type TAppProps = {
    store: TReduxStore
}

const App: React.FC<TAppProps> = ({store}) => {
    const profile = <Profile store={store} />
    const dialogs = <Dialogs store={store} state={store.getState()} />

    return (
        <HashRouter>
            <SSiteWrapper>
                <Sidebar />
                <SSiteContainer>
                    <Switch>
                        <Route path={PATH.profile} render={() => profile} exact />
                        <Redirect from="/" to={PATH.profile} exact />
                        <Route path={`${PATH.messages}/:id?`} render={() => dialogs} exact />
                        <Route path={"*"} component={PageNotFound} exact />
                    </Switch>
                </SSiteContainer>
            </SSiteWrapper>
        </HashRouter>
    );
}

export default App;
