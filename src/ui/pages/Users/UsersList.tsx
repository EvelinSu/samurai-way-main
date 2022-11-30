import React from 'react';
import LoaderIcon from "../../assets/loaders/loader";
import {Grid} from '../../common/Grid/Grid';
import User from "./User";
import {TUsersPage} from "../../../bll/usersReducer";
import UsersNotFound from "./UsersNotFound";

type TUsersList = {
    state: TUsersPage
}

const UsersList: React.FC<TUsersList> = React.memo(({state}) => {

    return state.isFetching
        ? <LoaderIcon />
        : state.users.length
            ? <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                {state.users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                        id={String(user.id)}
                    />))

                }
            </Grid>
            : <UsersNotFound />

});

export default UsersList;
