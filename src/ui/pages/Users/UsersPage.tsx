import React, {useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import Pagination from "../../common/Pagination/Pagination";
import {getUsersThunk, setUsersFilter, TUsersParams} from "../../../bll/usersReducer";
import {useHistory, useParams} from "react-router-dom";
import UserList from "./UserList/UserList";
import {useAppDispatch, useAppSelector} from "../../../common/hooks";
import SearchForm from "./SearchForm";
import {PATH} from "../../routes/types";
import LoaderIcon from "../../assets/loaders/loader";

const UsersPage = React.memo(() => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const {page, name} = useParams<{ page: string, name: string }>()

    const [searchText, setSearchText] = useState<string>(name || '')

    const pageSize = useAppSelector(state => state.users.pageSize)
    const totalUsersCount = useAppSelector(state => state.users.totalUsersCount)
    const isFetching = useAppSelector(state => state.users.isFetching)
    const filterName = useAppSelector(state => state.users.filter.name)
    const params: TUsersParams = {term: searchText, page: page || '1', count: pageSize}

    let totalPagesCount = useMemo(() => {
        return Math.ceil(totalUsersCount / pageSize)
    }, [totalUsersCount, pageSize])

    const onSearchHandler = useCallback(() => {
        if ((searchText !== name) && (searchText || name)) {
            searchText
                ? history.push(PATH.users + '/1/' + searchText)
                : history.push(PATH.users + '/1')
            dispatch(getUsersThunk(params))
        }
    }, [dispatch, searchText, page, pageSize])

    useLayoutEffect(() => {
        name && dispatch(setUsersFilter(name))
    }, [])

    useEffect(() => {
        dispatch(getUsersThunk(params))
    }, [page, pageSize])

    return (
        <SSiteContent>
            <PagePanel title="UsersPage">
                <SearchForm
                    setSearchText={setSearchText}
                    searchText={searchText}
                    onSearchHandler={onSearchHandler}
                    textInUrl={name}
                />
            </PagePanel>
            {isFetching ? <UserList /> : <LoaderIcon />}
            <Pagination
                totalPagesCount={totalPagesCount || 1}
                filterName={filterName}
            />
        </SSiteContent>
    );
});

export default UsersPage;

