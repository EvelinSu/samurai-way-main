import React from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import User from "./User";
import PagePanel from "../PagePanel";
import Input from "../../components/Form/Input";
import Pagination from "../../components/Pagination/Pagination";
import LoaderIcon from "../../assets/loaders/loader";
import {TMapStateToProps} from "./UsersContainer";
import {TUser} from "../../redux/usersReducer";
import {followAPI} from "../../api/api";

type TUsersProps = {
    followToggle: (userId: string | number) => void
    onPaginationClick: (activePage: number) => void
}

const Users: React.FC<TMapStateToProps & TUsersProps> = ({users, followToggle, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const onClickHandler = (id: string | number, user: TUser) => {
        if (!user.followed) {
            followAPI.postFollow(id).then((response) => {
                if (response.data.resultCode === 0) {
                    followToggle(id)
                }
            })
        }
        else {
            followAPI.unFollow(id).then((response) => {
                if (response.data.resultCode === 0) {
                    followToggle(id)
                }
            })
        }
    }

    return (
        <SSiteContent>
            <PagePanel title="Users">
                <Input placeholder={'Заготовка для поиска'} />
            </PagePanel>
            {
                props.isFetching
                    ? <LoaderIcon />
                    : <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                        {users.map((user) => (
                            <User
                                key={user.id}
                                user={user}
                                id={String(user.id)}
                                onClickHandler={onClickHandler}
                            />
                        ))}
                    </Grid>
            }
            <Pagination
                onClick={props.onPaginationClick}
                activePage={props.currentPage}
                pagesCount={pagesCount || 1}
            />
        </SSiteContent>
    );
};

export default Users;
