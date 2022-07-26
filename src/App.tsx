import React from 'react';
import './styles/App.css';
import {SSiteContainer, SSiteContent, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <SSiteWrapper>
                <SSiteContainer>
                    <Sidebar />
                    <SSiteContent>
                        <Switch>
                            <Route path={"//"} component={Profile} />
                            <Route path={"/profile"} component={Profile} />
                            <Route path={"/messages"} component={Dialogs} />
                            <Route path={""} component={PageNotFound} />
                        </Switch>
                    </SSiteContent>
                </SSiteContainer>
            </SSiteWrapper>
        </BrowserRouter>
    );
}

export default App;
