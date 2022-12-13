import React, {FC} from 'react';
import {Redirect, Route, RouteProps, Switch, useLocation} from "react-router-dom";
import {PATH} from "./types";
import ProfilePage from "../pages/Profile/ProfilePage";
import DialogsPage from "../pages/Dialogs/DialogsPage";
import UsersPage from "../pages/Users/UsersPage";
import PageNotFound from "../pages/PageNotFound";
import {useAppSelector} from "../../common/hooks";
import {SettingsPage} from "../pages/Settings/SettingsPage";

const PrivateRoute: FC<RouteProps> = (props) => {
    const location = useLocation();

    const isAuth = useAppSelector(state => state.auth.isAuth)

    return isAuth
        ? <Route {...props} />
        : <Redirect
            to={{
                pathname: PATH.users,
                state: {from: location}
            }}
        />
};

export const Routes = () => {

    const myId = useAppSelector(state => state.auth.account.id)

    return (
        <Switch>
            <Redirect from={`/`} to={PATH.profile + '/' + myId} exact />
            <PrivateRoute path={PATH.profile + '/' + myId} component={ProfilePage} exact />
            <PrivateRoute path={PATH.settings} component={SettingsPage} exact />
            <Route path={`${PATH.profile}/:id`} component={ProfilePage} exact />
            <PrivateRoute path={`${PATH.messages}/:id?`} component={DialogsPage} exact />
            <Route path={`${PATH.users}/:page?/:name?`} component={UsersPage} exact />
            <Route path={"*"} component={PageNotFound} exact />
        </Switch>
    );
};

