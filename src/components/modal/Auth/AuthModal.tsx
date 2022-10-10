import React from 'react';
import {STitle} from '../../Text/STitle';
import Input from "../../Form/Input";
import UserIcon from "../../../assets/icons/UserIcon";
import Button from "../../Button/Button";
import {SForm} from "../../Form/styled";
import Checkbox from "../../Checkbox/Checkbox";
import {ErrorMessage, Field, FieldProps, Formik, FormikErrors, FormikValues} from "formik";
import { Box } from '../../Box/Box';
import {useDispatch} from "react-redux";
import {authModalToggleAC} from "../../../redux/authReducer";

const authValidate = (values: FormikValues) => {
    const errors: FormikErrors<any> = {};
    // if (!values.login) {
    //     errors.login = 'Required';
    // }
    // if (!values.password) {
    //     errors.password = 'Required'
    // }

    return errors;
}

const AuthModal = () => {

    const dispatch = useDispatch()
    return (
        <>
            <STitle fontSize={"20px"}>Authorization</STitle>
            <Formik
                initialValues={{login: '', password: '', rememberMe: false}}
                validate={authValidate}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        dispatch(authModalToggleAC(false))
                        alert(JSON.stringify(values) + "\r\n\r\n COOL, BUT AUTHORIZATION ISN'T WORK");
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <SForm>
                        <Field
                            type={"name"}
                            name="login"
                            placeholder={'Login'}
                        >
                            {({field}: FieldProps) => <Input icon={<UserIcon />} {...field} />}
                        </Field>
                        <ErrorMessage name="login" component="div" />
                        <Field
                            type="password"
                            name="password"
                            placeholder={'Password'}
                        >
                            {({field}: FieldProps) => <Input type="password" icon={<UserIcon />} {...field} />}
                        </Field>
                        <ErrorMessage name="password" component="div" />
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
