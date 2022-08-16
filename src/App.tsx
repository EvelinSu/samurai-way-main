import React from 'react';
import './styles/App.css';
import {SSiteContainer, SSiteContent, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {TRootState} from "./redux/state";

type TAppProps = {
    state: TRootState
    addPost: (text: string) => void
    sendMessage: (text: string, id: string) => void
}

const App: React.FC <TAppProps> = ({sendMessage, addPost, state, ...props}) => {
    const profile = <Profile posts={state.profilePage.posts} addPost={addPost}/>
    const dialogs = <Dialogs dialogs={state.dialogsPage} messages={state.dialogsMessages} sendMessage={sendMessage}/>

    return (
        <BrowserRouter>
            <SSiteWrapper>
                <SSiteContainer>
                    <Sidebar />
                    <SSiteContent>
                        <Switch>
                            <Route path="/profile"  render={() => profile} exact />
                            <Redirect from="/" to="/profile" exact/>
                            <Route path={"/messages/:id?"} render={() => dialogs}  exact />
                            <Route path={"*"} component={PageNotFound} exact />
                        </Switch>
                    </SSiteContent>
                </SSiteContainer>
            </SSiteWrapper>
        </BrowserRouter>
    );
}

export default App;
