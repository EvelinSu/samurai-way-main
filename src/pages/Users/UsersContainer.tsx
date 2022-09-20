import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {TRootState} from "../../redux/reduxStore";
import UsersC from "./UsersC";
import {followUserToggleAC, setCurrentPageAC, setUsersAC, setTotalUsersCountAC, TUser} from "../../redux/usersReducer";

type TMapStateToProps = {
    users: Array<TUser>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

type TMapDispatchStateToProps = {
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void

}
export const mapDispatchToProps = (dispatch: Dispatch): TMapDispatchStateToProps => {
    return {
        followToggle: (UserId) => dispatch(followUserToggleAC(UserId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)