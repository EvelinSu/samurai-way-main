import React, {useEffect, useMemo, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import Pagination from "../../components/Pagination/Pagination";
import {getUsersThunk, searchUsersThunk, TUsersPage} from "../../redux/usersReducer";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import UsersList from "./UsersList";
import UsersNotFound from "./UsersNotFound";
import {Field, FieldProps, Form, Formik, FormikValues} from "formik";
import Input from "../../components/Form/Input";
import SearchIcon from "../../assets/icons/SearchIcon";

const searchValidate = (values: FormikValues) => {
    const errors = {};
    return errors;
}

type TUsersProps = {}

const Users: React.FC<TUsersProps> = (props) => {
    const dispatch = useDispatch()
    const state = useSelector<TRootState, TUsersPage>(state => state.usersPage)
    const {page} = useParams<{ page: string }>()

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        !searchText
            ? dispatch(getUsersThunk(+page || 1, state.pageSize))
            : dispatch(searchUsersThunk(searchText, +page, state.pageSize))
    }, [page, searchText, dispatch, state.pageSize])

    const onSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {() => (
                        <Form>
                            <Field name="search">
                                {({field}: FieldProps) =>
                                    <Input
                                        onKeyUp={onSearchHandler}
                                        icon={<SearchIcon />}
                                        {...field}
                                    />
                                }
                            </Field>
                        </Form>
                    )}
                </Formik>
            </PagePanel>
            {state.users.length
                ? <UsersList state={state} />
                : <UsersNotFound />
            }
            <Pagination
                pagesCount={pagesCount || 1}
            />
        </SSiteContent>
    );
};

export default Users;

