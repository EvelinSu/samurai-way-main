import React, {useLayoutEffect} from 'react';
import {Grid} from '../../../common/Grid/Grid';
import User from "../User/User";
import {setPageSize} from "../../../../bll/usersReducer";
import UsersNotFound from "./UsersNotFound";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks";

const windowHeight = window.innerHeight

const UserList = React.memo(() => {
    const dispatch = useAppDispatch()

    const users = useAppSelector(state => state.users.users)

    useLayoutEffect(() => {
        if (windowHeight > 1000) dispatch(setPageSize(20))
        if (windowHeight > 1300) dispatch(setPageSize(25))
    }, [windowHeight])

    return users.length
        ? <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    id={String(user.id)}
                />))

            }
        </Grid>
        : <UsersNotFound />
});

export default UserList;
