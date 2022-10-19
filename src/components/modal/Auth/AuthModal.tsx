import React, {Fragment} from 'react';
import {STitle} from '../../Text/STitle';
import Input from "../../Form/Input";
import UserIcon from "../../../assets/icons/UserIcon";
import Button from "../../Button/Button";
import {SForm} from "../../Form/styled";
import Checkbox from "../../Checkbox/Checkbox";
import {useFormik} from "formik";
import {Box} from '../../Box/Box';
import {shallowEqual, useDispatch} from "react-redux";
import {SErrorBox} from "../../Errors/styles";
import LockIcon from "../../../assets/icons/LockIcon";
import {useAppSelector} from "../../../hooks/useAppDispatch";
import * as Yup from 'yup';
import {loginThunk} from "../../../redux/authReducer";

type LoginRequest = {
    email: string;
    password: string;
    rememberMe: boolean;
}
const AuthModal = () => {

    const dispatch = useDispatch()
    const authMessages = useAppSelector(state => state.auth.messages, shallowEqual)

    const {
        handleBlur,
        handleSubmit,
        touched,
        handleChange,
        isValid,
        setFieldValue,
        values,
        errors,
    } = useFormik<LoginRequest>({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: ({email, password, rememberMe}) => {
            dispatch(loginThunk(email, password, rememberMe))
        }
    });

    return (
        <Fragment>
            <STitle fontSize={"20px"}>Authorization</STitle>
            <SForm onSubmit={handleSubmit}>
                <Input
                    error={touched.email ? errors.email : ""}
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    icon={<UserIcon />}
                    required
                />
                <Input
                    error={touched.password ? errors.password : ""}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    icon={<LockIcon />}
                    required
                />
                <Checkbox
                    label="Remember me"
                    type="checkbox"
                    name="rememberMe"
                    onChange={(event) => setFieldValue("rememberMe", event.target.checked)}
                />
                {authMessages.length > 0 && <SErrorBox> {authMessages} </SErrorBox>}
                <Box justifyContent={"center"}>
                    <Button
                        type="submit"
                        size={'lg'}
                        isDisabled={!isValid}
                        label={'Login'}
                    />
                </Box>
            </SForm>
        </Fragment>
    );
};

export default AuthModal;
