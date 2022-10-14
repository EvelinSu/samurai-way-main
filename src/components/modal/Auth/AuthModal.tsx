import React from 'react';
import {STitle} from '../../Text/STitle';
import Input from "../../Form/Input";
import UserIcon from "../../../assets/icons/UserIcon";
import Button from "../../Button/Button";
import {SForm} from "../../Form/styled";
import Checkbox from "../../Checkbox/Checkbox";
import {ErrorMessage, Field, FieldProps, Formik, FormikErrors, FormikValues} from "formik";
import {Box} from '../../Box/Box';
import {loginThunk} from "../../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../../redux/reduxStore";

const authValidate = (values: FormikValues) => {
    const errors: FormikErrors<any> = {};
    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required'
    }

    return errors;
}

const AuthModal = () => {

    const dispatch = useDispatch()
    const authMessages = useSelector<TRootState, string[]>(state => state.auth.messages)
    console.log(authMessages)

    return (
        <>
            <STitle fontSize={"20px"}>Authorization</STitle>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false}}
                validate={authValidate}
                onSubmit={(values, {setSubmitting}) => {
                    let {email, password, rememberMe} = values
                    dispatch(loginThunk(email, password, rememberMe))
                    setSubmitting(false);
                }}
            >
                {({isSubmitting, errors}) => (
                    <SForm>
                        <Field
                            type={"email"}
                            name="email"
                        >
                            {({field}: FieldProps) => <Input error={errors.email} placeholder={"Email"} icon={<UserIcon />} {...field} />}
                        </Field>
                        <ErrorMessage name="login" component="div" />
                        <Field
                            type="password"
                            name="password"
                        >
                            {({field}: FieldProps) => (
                                <Input
                                    type="password"
                                    error={errors.password}
                                    placeholder={"Password"}
                                    icon={<UserIcon />}
                                    {...field}
                                />)}
                        </Field>
                        <Field
                            type={'checkbox'}
                            name="rememberMe"
                        >
                            {({field}: FieldProps) => <Checkbox label={'Remember me'} {...field} />}
                        </Field>
                        <Box justifyContent={"center"}>
                            <Button
                                type="submit"
                                size={'lg'}
                                isDisabled={isSubmitting}
                                label={'Login'}
                            />
                        </Box>
                    </SForm>
                )}
            </Formik>
        </>
    );
};

export default AuthModal;
