import React from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import {TUser} from "../../redux/usersReducer";
import User from "./User";
import PagePanel from "../PagePanel";
import Input from "../../components/Form/Input";
import Pagination from "../../components/Pagination/Pagination";

type TUsersProps = {
    users: Array<TUser>
    followToggle: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPaginationClick: (activePage: number) => void
}

const Users: React.FC<TUsersProps> = ({users, followToggle, ...props}) => {
    const onClickHandler = (userId: string) => {
        followToggle(userId)
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    return (
        <SSiteContent>
            <PagePanel title="Users">
                <Input placeholder={'Заготовка для поиска'} />
            </PagePanel>
            <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                {users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                        id={String(user.id)}
                        onClickHandler={onClickHandler}
                    />
                ))}
            </Grid>
            <Pagination
                onClick={props.onPaginationClick}
                activePage={props.currentPage}
                pagesCount={pagesCount || 1}
            />
        </SSiteContent>
    );
};

export default Users;
