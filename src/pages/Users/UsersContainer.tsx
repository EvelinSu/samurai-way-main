import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {TRootState} from "../../redux/reduxStore";
import Users from "./Users";
import {followUserToggleAC, setUsersAC, TUser} from "../../redux/usersReducer";

type TMapStateToProps = {
    users: Array<TUser>
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

type TMapDispatchStateToProps = {
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
}
export const mapDispatchToProps = (dispatch: Dispatch): TMapDispatchStateToProps => {
    return {
        followToggle: (UserId) => dispatch(followUserToggleAC(UserId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)