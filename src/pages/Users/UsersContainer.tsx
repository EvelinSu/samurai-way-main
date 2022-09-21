import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {TRootState} from "../../redux/reduxStore";
import {
    followUserToggleAC,
    setCurrentPageAC,
    setUsersAC,
    setTotalUsersCountAC,
    TUser,
    toggleLoaderAC
} from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";

type TUsersProps = {
    users: Array<TUser>
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    isFetching: boolean
    toggleLoader: (isFetching: boolean) => void
}

class UsersAContainer extends Component<TUsersProps> {
    componentDidMount() {
        this.props.toggleLoader(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.toggleLoader(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPaginationClick = (activePage: number) => {
        this.props.toggleLoader(true)
        this.props.setCurrentPage(activePage)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
                this.props.toggleLoader(false)

            }
        )
    }

    render() {
        return (
            <Users
                isFetching={this.props.isFetching}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                followToggle={this.props.followToggle}
                totalUsersCount={this.props.totalUsersCount}
                onPaginationClick={this.onPaginationClick}
            />

        )
    }
}

type TMapStateToProps = {
    users: Array<TUser>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type TMapDispatchStateToProps = {
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleLoader: (isFetching: boolean) => void

}
export const mapDispatchToProps = (dispatch: Dispatch): TMapDispatchStateToProps => {
    return {
        followToggle: (UserId) => dispatch(followUserToggleAC(UserId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
        toggleLoader: (isFetching) => dispatch(toggleLoaderAC(isFetching)),
        setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAContainer)