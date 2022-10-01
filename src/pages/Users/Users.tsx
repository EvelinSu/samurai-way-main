import React, {useEffect} from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import User from "./User";
import PagePanel from "../PagePanel";
import Input from "../../components/Form/Input";
import Pagination from "../../components/Pagination/Pagination";
import LoaderIcon from "../../assets/loaders/loader";
import {followToggleThunk, getUsersThunk, TUsersPage} from "../../redux/usersReducer";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {cleanup} from "@testing-library/react";

type TUsersProps = {

}

const Users: React.FC<TUsersProps> = (props) => {
    useEffect(() => {
        dispatch(getUsersThunk(1, state.pageSize))
        return () => {
            cleanup()
        }
    }, [])
    const state = useSelector<TRootState, TUsersPage>(state => state.usersPage)
    const dispatch = useDispatch()

    // для перерисовки страницы при изменении адресной строки, например, через кнопку "назад" в браузере
    const {page} = useParams<{page: string}>()
    useEffect(() => {
        dispatch(getUsersThunk(+page, state.pageSize))
    }, [page])
    //

    const onPaginationClick = () => {
        dispatch(getUsersThunk(+page, state.pageSize))
    }

    let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)

    return (
        <SSiteContent>
            <PagePanel title="Users">
                <Input placeholder={'Заготовка для поиска'} />
            </PagePanel>
            {
                state.isFetching
                    ? <LoaderIcon />
                    : <Grid columns={"repeat(auto-fill, minmax(150px, 1fr))"}>
                        {state.users.map((user) => (
                            <User
                                key={user.id}
                                user={user}
                                id={String(user.id)}
                                followingInProgress={state.followingInProgress.includes(user.id)}
                                onClickHandler={() => {dispatch(followToggleThunk(user))}}
                            />
                        ))}
                    </Grid>
            }
            <Pagination
                onClick={onPaginationClick}
                pagesCount={pagesCount || 1}
            />
        </SSiteContent>
    );
};

export default Users;
