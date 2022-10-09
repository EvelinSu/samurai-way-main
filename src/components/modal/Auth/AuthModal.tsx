import React from 'react';
import {STitle} from '../../Text/STitle';
import Input from "../../Form/Input";
import UserIcon from "../../../assets/icons/UserIcon";
import Button from "../../Button/Button";
import {Box} from "../../Box/Box";
import {SForm} from "../../Form/styled";

const AuthModal = () => {
    return (
        <>

            <STitle fontSize={"20px"}>Authorization</STitle>
            <SForm>
                <Input icon={<UserIcon />} placeholder={'Login'} type={'name'} />
                <Input icon={<UserIcon />} placeholder={'Email'} type={'email'} />
                <Input icon={<UserIcon />} placeholder={'Password'} type={'password'} />
            </SForm>
            <Box justifyContent={"center"}>
                <Button size={'lg'} label={'Login'} onClick={() => alert('..NOT READY YET, SORRY')}/>
            </Box>
        </>
    );
};

export default AuthModal;
