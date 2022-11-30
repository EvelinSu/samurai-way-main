import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {PATH} from "../bll/types";
import ProfilePage from "../ui/pages/Profile/ProfilePage";
import DialogsPage from "../ui/pages/Dialogs/DialogsPage";
import UsersPage from "../ui/pages/Users/UsersPage";
import PageNotFound from "../ui/pages/PageNotFound";
import {useAppSelector} from "../common/hooks/hooks";

export const Routes = () => {
    const account = useAppSelector(state => state.auth.account)


    return (
        <Switch>
            <Route path={`${PATH.profile}/:id?`} component={ProfilePage} exact />
            <Redirect from={`/`} to={PATH.profile + '/' + account.id} exact />
            <Route path={`${PATH.messages}/:id?`} component={DialogsPage} exact />
            <Route path={`${PATH.users}/:page?/:name?`} component={UsersPage} exact />
            <Route path={"*"} component={PageNotFound} exact />
        </Switch>
    );
};

