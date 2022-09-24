import React, {Component} from 'react';
import {connect} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {
    followToggle,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    TUser,
    usersToggleLoader
} from "../../redux/usersReducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";

type TUsersRequestContainerProps = TMapStateToProps & TMapDispatchToProps

class UsersContainer extends Component<TUsersRequestContainerProps> {
    componentDidMount() {
        this.props.usersToggleLoader(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalCount)
            setTimeout(() => {
                this.props.usersToggleLoader(false)
            }, 500)
        })
    }

    onPaginationClick = (activePage: number) => {
        this.props.usersToggleLoader(true)
        this.props.setCurrentPage(activePage)
        usersAPI.getUsers(activePage, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            setTimeout(() => {
                this.props.usersToggleLoader(false)
            }, 500)
        })

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

export type TMapStateToProps = {
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

type TMapDispatchToProps = {
    followToggle: (userId: string | number) => void
    setUsers: (users: Array<TUser>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    usersToggleLoader: (isFetching: boolean) => void
}

export default connect(mapStateToProps, {
    followToggle, setUsers, setCurrentPage, usersToggleLoader, setTotalUsersCount
})(UsersContainer)