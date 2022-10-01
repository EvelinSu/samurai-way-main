import React, {Component} from 'react';
import {connect} from "react-redux";
import {TRootState} from "../../redux/reduxStore";

import Users from "./Users";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {
    followToggleThunk,
    getUsersThunk,
    TUser,
} from "../../redux/usersReducer";


type TUsersRequestContainerProps = RouteComponentProps<TPathParams> & TMapStateToProps & TMapDispatchToProps

type TPathParams = {
    page: string
}

class UsersContainer extends Component<TUsersRequestContainerProps> {
    componentDidMount() {
        this.props.getUsersThunk(1, this.props.pageSize)
    }

    onPaginationClick = () => {
        this.props.getUsersThunk(+this.props.match.params.page, this.props.pageSize)
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
    isFetching: boolean
    followingInProgress: Array<number | string>
}
export const mapStateToProps = (state: TRootState): TMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

type TMapDispatchToProps = {
    getUsersThunk: (currentPage: number, pageSize: number) =>  void
    followToggleThunk: (user: TUser) => void
}
let WithUrlDataComponent = withRouter(UsersContainer)

export default connect(mapStateToProps, { getUsersThunk, followToggleThunk})(WithUrlDataComponent)