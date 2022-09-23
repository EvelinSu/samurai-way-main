import React, {ReactNode} from 'react';
import {SInput, SInputWrapper} from "./styled";
import {Box} from "../Box/Box";


type TInputProps = {
    placeholder?: string
    value?: string
    type?: string
    icon?: any
}

const Input: React.FC<TInputProps> = (props) => {

    return (
        <SInputWrapper>
            <Box opacity={0.5}>
                {props.icon}
            </Box>
            <SInput
                placeholder={props.placeholder || 'Введите текст...'}
                value={props.value}
                type={props.type}
            />
        </SInputWrapper>

    );
};

export default Input;
