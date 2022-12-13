import React, {Fragment, useState} from 'react';
import {STitle} from '../../common/Text/STitle';
import Input from "../../common/Form/Input";
import UserIcon from "../../assets/icons/UserIcon";
import Button from "../../common/Button/Button";
import {SForm} from "../../common/Form/styled";
import Checkbox from "../../common/Checkbox/Checkbox";
import {useFormik} from "formik";
import {Box} from '../../common/Box/Box';
import {shallowEqual} from "react-redux";
import {SErrorBox} from "../../common/Errors/styles";
import LockIcon from "../../assets/icons/LockIcon";
import {useAppDispatch, useAppSelector} from "../../../common/hooks";
import {loginThunk} from "../../../bll/authReducer";
import * as Yup from 'yup';
import {SText} from "../../common/Text/SText";

type LoginRequest = {
    email: string;
    password: string;
    rememberMe: boolean;
}
const AuthModal = () => {
    const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)

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
            setIsLoading(true)
            dispatch(loginThunk(email, password, rememberMe))
                .then(() => setIsLoading(false))
        }
    });

    const testAccountHandler = () => {
        const email = "free@samuraijs.com"
        const password = "free"
        setIsLoading(true)
        dispatch(loginThunk(email, password, false))
            .then(() => setIsLoading(false))
    }

    return (
        <Fragment>
            <STitle fontSize={"20px"}>Authorization</STitle>
            <Box flexDirection={"column"}>
                <SText>
                    <SText opacity={0.3}>
                        To log in get registered
                    </SText>
                    <a href={"https://social-network.samuraijs.com/"}
                       target={"_blank"}
                    >here</a>
                </SText>
                <SText>
                    <SText opacity={0.3}>or click</SText>
                    <a onClick={testAccountHandler}>here</a>
                    <SText opacity={0.3}>to log in to a test account</SText>
                </SText>
            </Box>
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
                {authMessages?.length > 0 ? <SErrorBox> {authMessages} </SErrorBox> : <></>}
                <Box justifyContent={"center"}>
                    <Button
                        type="submit"
                        size={'lg'}
                        isDisabled={!isValid || isLoading}
                        label={'Login'}
                        isLoading={isLoading}
                    />
                </Box>
            </SForm>
        </Fragment>
    );
};

export default AuthModal;
