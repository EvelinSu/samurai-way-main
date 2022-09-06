import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {TRootState} from "../../redux/reduxStore";
import Users from "./Users";
import {followUserAC, setUsersAC, TUser, unFollowUserAC} from "../../redux/usersReducer";

type TMapStateToProps = {
    users: Array<TUser>
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        users: state.usersPage.users
    }
}

type TMapDispatchStateToProps = {
    follow: (userId: string, myId: string) => void
    unfollow: (userId: string, myId: string) => void
    setUsers: (users: Array<TUser>) => void
}
export const mapDispatchToProps = (dispatch: Dispatch): TMapDispatchStateToProps => {
    return {
        follow: (UserId, myId) => dispatch(followUserAC(UserId, myId)),
        unfollow: (UserId, myId) => dispatch(unFollowUserAC(UserId, myId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)