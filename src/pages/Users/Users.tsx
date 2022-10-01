import React, {useEffect} from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import User from "./User";
import PagePanel from "../PagePanel";
import Input from "../../components/Form/Input";
import Pagination from "../../components/Pagination/Pagination";
import LoaderIcon from "../../assets/loaders/loader";
import {TMapStateToProps} from "./UsersContainer";
import {TUser} from "../../redux/usersReducer";
import {useParams} from "react-router-dom";

type TUsersProps = TMapStateToProps & {
    onPaginationClick: (activePage: number) => void
    followToggleThunk: (user: TUser) => void
}

const Users: React.FC<TUsersProps> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // для перерисовки страницы при изменении адресной строки, например, через кнопку "назад" в браузере
    const {page} = useParams<{page: string}>()
    useEffect(() => {
        props.onPaginationClick(+page)
    }, [page])
    //

    return (
        <SSiteContent>
            <PagePanel title="Users">
                <Input placeholder={'Заготовка для поиска'} />
            </PagePanel>
            {
                props.isFetching
                    ? <LoaderIcon />
                    : <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                        {props.users.map((user) => (
                            <User
                                key={user.id}
                                user={user}
                                id={String(user.id)}
                                followingInProgress={props.followingInProgress.includes(user.id)}
                                onClickHandler={() => {props.followToggleThunk(user)}}
                            />
                        ))}
                    </Grid>
            }
            <Pagination
                onClick={props.onPaginationClick}
                pagesCount={pagesCount || 1}
            />
        </SSiteContent>
    );
};

export default Users;
