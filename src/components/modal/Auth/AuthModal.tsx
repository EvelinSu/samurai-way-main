import React from 'react';
import {STitle} from '../../Text/STitle';
import Input from "../../Form/Input";
import UserIcon from "../../../assets/icons/UserIcon";
import Button from "../../Button/Button";
import {SForm} from "../../Form/styled";
import Checkbox from "../../Checkbox/Checkbox";
import {Field, FieldProps, Formik, FormikErrors, FormikValues} from "formik";
import {Box} from '../../Box/Box';
import {loginThunk} from "../../../redux/authReducer";
import {useDispatch} from "react-redux";
import {SErrorBox} from "../../Errors/styles";
import LockIcon from "../../../assets/icons/LockIcon";
import {useAppSelector} from "../../../hooks/useAppDispatch";

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
    const authMessages = useAppSelector(state => state.auth.messages)

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
                            type="email"
                            name="email"
                        >
                            {({field}: FieldProps) => (
                                <Input
                                    error={errors.email}
                                    required
                                    placeholder={"Email"}
                                    icon={<UserIcon />} {...field}
                                />
                            )}
                        </Field>
                        <Field
                            type="password"
                            name="password"
                        >
                            {({field}: FieldProps) => (
                                <Input
                                    type="password"
                                    error={errors.password}
                                    placeholder={"Password"}
                                    icon={<LockIcon />}
                                    required
                                    {...field}
                                />)}
                        </Field>
                        {authMessages.length > 0 && (
                            <SErrorBox>
                                {authMessages}
                            </SErrorBox>
                        )}
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
