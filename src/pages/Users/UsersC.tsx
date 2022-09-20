import React, {Component} from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import {TUser} from "../../redux/usersReducer";
import axios from "axios";
import User from "./User";
import PagePanel from "../PagePanel";
import Input from "../../components/Form/Input";
import Pagination from "../../components/Pagination/Pagination";


type TUsersProps = {
    users: Array<TUser>
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
}

class Users extends Component<TUsersProps> {
    // constructor(props: TUsersProps) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onClickHandler = (userId: string) => {
        this.props.followToggle(userId)
    }
    onPaginationClick = (activePage: number) => {
        this.props.setCurrentPage(activePage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        console.log(pagesCount)
        return (
            <SSiteContent>
                <PagePanel title="Users">
                    <Input placeholder={'Заготовка для поиска'}/>
                </PagePanel>
                <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                    {this.props.users.map((user) => (
                        <User user={user} id={String(user.id)} onClickHandler={this.onClickHandler}/>
                    ))}
                </Grid>
                <Pagination
                    onClick={this.onPaginationClick}
                    activePage={this.props.currentPage}
                    pagesCount={pagesCount || 1}
                />
            </SSiteContent>
        );

    };
}

export default Users;
