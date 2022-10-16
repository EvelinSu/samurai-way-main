import React, {useEffect, useMemo, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import Pagination from "../../components/Pagination/Pagination";
import {getUsersThunk, searchUsersThunk, setUsersFilter} from "../../redux/usersReducer";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import UsersList from "./UsersList";
import {Field, FieldProps, Form, Formik, FormikValues} from "formik";
import Input from "../../components/Form/Input";
import {Box} from '../../components/Box/Box';
import Button from "../../components/Button/Button";
import {PATH} from "../../redux/types";
import {useAppSelector} from "../../hooks/useAppDispatch";

const searchValidate = (values: FormikValues) => {
    const errors = {};
    return errors;
}

type TUsersProps = {}

const Users: React.FC<TUsersProps> = (props) => {
    const dispatch = useDispatch()
    const state = useAppSelector(state => state.usersPage)
    const filterName = useAppSelector(state => state.usersPage.filter.name)
    const {page} = useParams<{ page: string }>()
    const {name} = useParams<{ name: string }>()
    const history = useHistory()

    const [searchText, setSearchText] = useState<string>(name)

    //при первой прогрузке проверить есть ли в адресной строке значение
    useEffect(() => {name && dispatch(setUsersFilter(name))}, [])
    //
    useEffect(() => {
        searchText
            ? dispatch(searchUsersThunk(searchText, +page, state.pageSize))
            : dispatch(getUsersThunk(+page || 1, state.pageSize))
    }, [page, state.pageSize])

    const onSearchHandler = () => {
        if ((searchText !== name) && (searchText || name)) {
            searchText ? history.push(PATH.users + '/1/' + searchText) : history.push(PATH.users + '/1')
            dispatch(searchUsersThunk(searchText, +page, state.pageSize))
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value)
    }

    let pagesCount = useMemo(() => {
        return Math.ceil(state.totalUsersCount / state.pageSize)
    }, [state.totalUsersCount, state.pageSize])

    return (
        <SSiteContent>
            <PagePanel title="Users">
                <Formik
                    initialValues={{search: ''}}
                    validate={searchValidate}
                    onSubmit={(values) => {
                        setTimeout(() => {
                            onSearchHandler()
                        }, 400);
                    }}
                >
                    {() => (
                        <Form>
                            <Box gap={20}>
                                <Field name="search">
                                    {({field}: FieldProps) =>
                                        <Input
                                            {...field}
                                            placeholder={'Search by name'}
                                            value={searchText}
                                            onChange={onChangeHandler}
                                        />
                                    }
                                </Field>
                                <Button isDisabled={(searchText === name) || (!searchText && !name)}
                                        type={"submit"}
                                        label={'Search'}
                                />
                            </Box>
                        </Form>
                    )}
                </Formik>
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

