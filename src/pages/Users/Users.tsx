import React, {useEffect, useMemo, useState} from 'react';
import {SSiteContent} from "../../layout/styled";
import PagePanel from "../PagePanel";
import Pagination from "../../components/Pagination/Pagination";
import {getUsersThunk, searchUsersThunk, TUsersPage} from "../../redux/usersReducer";
import {useHistory, useParams} from "react-router-dom";
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
    const filterName = useSelector<TRootState, string>(state => state.usersPage.filter.name)
    const {page} = useParams<{ page: string }>()
    const {name} = useParams<{ name: string }>()
    const history = useHistory()

    const [searchText, setSearchText] = useState(filterName)

    //при первой прогрузке проверить есть ли в адресной строке значение
    useEffect(() => {name && setSearchText(name)}, [])
    //

    useEffect(() => {
        if (searchText) {
            history.push(searchText)
            dispatch(searchUsersThunk(searchText, +page, state.pageSize))
        } else {
            dispatch(getUsersThunk(+page || 1, state.pageSize))
        }
    }, [page, searchText, state.pageSize])

    const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                                        icon={<SearchIcon />}
                                        {...field}
                                        value={searchText}
                                        onChange={onSearchHandler}
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

