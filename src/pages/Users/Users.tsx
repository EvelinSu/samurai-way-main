import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import Pagination from "../../components/Pagination/Pagination";
import {getUsersThunk, searchUsersThunk, setUsersFilter} from "../../redux/usersReducer";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import UsersList from "./UsersList";
import {useAppSelector} from "../../hooks/useAppDispatch";
import SearchForm from "./SearchForm";
import {PATH} from "../../redux/types";

const Users = () => {
    const dispatch = useDispatch()
    const state = useAppSelector(state => state.usersPage)
    const filterName = useAppSelector(state => state.usersPage.filter.name)
    const history = useHistory()
    const {page, name} = useParams<{ page: string, name: string }>()

    const [searchText, setSearchText] = useState<string>(name || '')

    //при первой прогрузке проверить есть ли в адресной строке значение
    useLayoutEffect(() => {name && dispatch(setUsersFilter(name))}, [])
    //
    useEffect(() => {
        searchText
            ? dispatch(searchUsersThunk(searchText, +page, state.pageSize))
            : dispatch(getUsersThunk(+page || 1, state.pageSize))
    }, [page, state.pageSize])

    let pagesCount = useMemo(() => {
        return Math.ceil(state.totalUsersCount / state.pageSize)
    }, [state.totalUsersCount, state.pageSize])

    const onSearchHandler = () => {
        if ((searchText !== name) && (searchText || name)) {
            searchText ? history.push(PATH.users + '/1/' + searchText) : history.push(PATH.users + '/1')
            dispatch(searchUsersThunk(searchText, +page, state.pageSize))
        }
    }

    return (
        <SSiteContent>
            <PagePanel title="Users">
                <SearchForm
                    setSearchText={setSearchText}
                    searchText={searchText}
                    onSearchHandler={onSearchHandler}
                    textInUrl={name}
                />
            </PagePanel>
            <UsersList state={state} />
            <Pagination
                pagesCount={pagesCount || 1}
                filterName={filterName}
            />
        </SSiteContent>
    );
};

export default Users;

