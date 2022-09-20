import React, {useEffect} from 'react';
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

const Users: React.FC<TUsersProps> = ({users, followToggle, ...props}) => {
    const onClickHandler = (userId: string) => {
        followToggle(userId)
    }

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
    }, [])


    return (
        <SSiteContent>
            <PagePanel title="Users">
                <Input placeholder={'Заготовка для поиска'}/>
            </PagePanel>
            <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                {users.map((user) => (
                    <User id={String(user.id)} user={user} onClickHandler={onClickHandler}/>
                ))}
            </Grid>
        </SSiteContent>
    );
};

export default Users;
