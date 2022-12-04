import React, {useCallback, useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import Pagination from "../../common/Pagination/Pagination";
import {getUsersThunk, searchUsersThunk, setUsersFilter} from "../../../bll/usersReducer";
import {useHistory, useParams} from "react-router-dom";
import {shallowEqual} from "react-redux";
import UsersList from "./UsersList";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import SearchForm from "./SearchForm";
import {PATH} from "../../../bll/types";

const UsersPage = React.memo(() => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.users, shallowEqual)
    const filterName = useAppSelector(state => state.users.filter.name)
    const history = useHistory()
    const {page, name} = useParams<{ page: string, name: string }>()

    const [searchText, setSearchText] = useState<string>(name || '')

    //при первой прогрузке проверить есть ли в адресной строке значение
    useLayoutEffect(() => {
        name && dispatch(setUsersFilter(name))
    }, [])
    //
    useEffect(() => {
        let currentPage = page ? +page : 1
        searchText
            ? dispatch(searchUsersThunk(searchText, page || '', state.pageSize))
            : dispatch(getUsersThunk({currentPage: currentPage, pageSize: state.pageSize}))
    }, [page, state.pageSize])

    let totalPagesCount = useMemo(() => {
        return Math.ceil(state.totalUsersCount / state.pageSize)
    }, [state.totalUsersCount, state.pageSize])

    const onSearchHandler = useCallback(() => {
        if ((searchText !== name) && (searchText || name)) {
            searchText
                ? history.push(PATH.users + '/1/' + searchText)
                : history.push(PATH.users + '/1')
            dispatch(searchUsersThunk(searchText, page || '1', state.pageSize))
        }
    }, [dispatch, searchText, page, state.pageSize])

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
            <UsersList state={state} />
            <Pagination
                totalPagesCount={totalPagesCount || 1}
                filterName={filterName}
            />
        </SSiteContent>
    );
});

export default UsersPage;

