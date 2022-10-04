import React, {ReactNode} from 'react';
import {SInput, SInputWrapper} from "./styled";
import {Box} from "../Box/Box";


type TInputProps = {
    placeholder?: string
    value?: string
    type?: string
    icon?: any
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<TInputProps> = (props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e)
    }

    return (
        <SInputWrapper>
            <Box opacity={0.5}>
                {props.icon}
            </Box>
            <SInput
                onChange={onChange}
                placeholder={props.placeholder || 'Введите текст...'}
                value={props.value}
                type={props.type}
            />
        </SInputWrapper>

    );
};

export default Input;
