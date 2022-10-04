import React from 'react';
import LoaderIcon from "../../assets/loaders/loader";
import { Grid } from '../../components/Grid/Grid';
import User from "./User";
import {TUsersPage} from "../../redux/usersReducer";

type TUsersList = {
    state: TUsersPage
}

const UsersList: React.FC<TUsersList> = ({state}) => {
    return state.isFetching
        ? <LoaderIcon />
        : <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
            {state.users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    id={String(user.id)}
                />
            ))}
        </Grid>
};

export default UsersList;