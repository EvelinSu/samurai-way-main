import React, {Component} from 'react';
import {connect} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {
    followToggle,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    TUser,
    usersToggleLoader, setFollowingProgress, getUsersTC,
} from "../../redux/usersReducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";
import {RouteComponentProps, withRouter} from "react-router-dom";

type TUsersRequestContainerProps = RouteComponentProps<TPathParams> & TMapStateToProps & TMapDispatchToProps

type TPathParams = {
    page: string
}

class UsersContainer extends Component<TUsersRequestContainerProps> {
    componentDidMount() {
        getUsersTC(1, this.props.pageSize)
    }

    onPaginationClick = () => {
        getUsersTC(+this.props.match.params.page, this.props.pageSize)
        this.props.usersToggleLoader(true)
        usersAPI.getUsers(+this.props.match.params.page, this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            setTimeout(() => {
                this.props.usersToggleLoader(false)
            }, 500)
        }).finally(() => {
            setTimeout(() => {
                this.props.usersToggleLoader(false)
            }, 500)
        })

    }

    render() {
        return (
            <Users onPaginationClick={this.onPaginationClick} {...this.props} />

        )
    }
}

export type TMapStateToProps = {
    users: Array<TUser>
    pageSize: number
    totalUsersCount: number
    followingInProgress: Array<string | number>
    isFetching: boolean
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
    }
}

type TMapDispatchToProps = {
    followToggle: (userId: string | number) => void
    setUsers: (users: Array<TUser>) => void
    setTotalUsersCount: (usersCount: number) => void
    usersToggleLoader: (isFetching: boolean) => void
    setFollowingProgress: (id: string | number, isInProgress: boolean) => void
}
let WithUrlDataComponent = withRouter(UsersContainer)

export default connect(mapStateToProps, {
    followToggle, setUsers, setCurrentPage, usersToggleLoader, setTotalUsersCount, setFollowingProgress
})(WithUrlDataComponent)