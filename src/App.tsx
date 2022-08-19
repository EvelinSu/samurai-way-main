import React from 'react';
import {SSiteContainer, SSiteContent, SSiteWrapper} from "./layout/styled";
import Sidebar from "./layout/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Dialogs from "./pages/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import {PATH, TRootState} from "./redux/state";

type TAppProps = {
    state: TRootState
    addPost: (text: string) => void
    sendMessage: (text: string, id: string) => void
}

const App: React.FC <TAppProps> = ({sendMessage, addPost, state, ...props}) => {
    const profile = <Profile posts={state.profilePage.posts} addPost={addPost}/>
    const dialogs = <Dialogs dialogs={state.dialogsPage} messages={state.dialogsMessages} sendMessage={sendMessage}/>

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
