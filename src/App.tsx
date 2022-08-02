import React from 'react';
import './styles/App.css';
import {SSiteContainer, SSiteContent, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <SSiteWrapper>
                <SSiteContainer>
                    <Sidebar />
                    <SSiteContent>
                        <Switch>
                            <Route path="/profile"  component={Profile} exact />
                            <Redirect from="/" to="/profile" exact/>
                            <Route path={"/messages/:id?"} component={Dialogs} exact />
                            <Route path={"*"} component={PageNotFound} exact />
                        </Switch>
                    </SSiteContent>
                </SSiteContainer>
            </SSiteWrapper>
        </BrowserRouter>
    );
}

export default App;
