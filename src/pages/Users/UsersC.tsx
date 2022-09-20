import React, {Component} from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import {TUser} from "../../redux/usersReducer";
import axios from "axios";
import User from "./User";
import PagePanel from "../PagePanel";
import Input from "../../components/Form/Input";


type TUsersProps = {
    users: Array<TUser>
    followToggle: (userId: string) => void
    setUsers: (users: Array<TUser>) => void
}

class Users extends Component<TUsersProps> {
    // constructor(props: TUsersProps) {
    //     super(props);
    // }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onClickHandler = (userId: string) => {
        this.props.followToggle(userId)
    }

    render() {
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
            </SSiteContent>
        );

    };
}

export default Users;
