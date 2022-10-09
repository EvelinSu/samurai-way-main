import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {SInput, SInputWrapper} from "./styled";
import {Box} from "../Box/Box";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type TInputProps = DefaultInputPropsType & {
    icon?: any
}

const Input: React.FC<TInputProps> = (props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        props.onBlur && props.onBlur(e)
    }

    return (
        <SInputWrapper>
            <Box opacity={0.5}>
                {props.icon}
            </Box>
            <SInput
                onBlur={onBlur}
                onChange={onChange}
                placeholder={props.placeholder || 'Введите текст...'}
                value={props.value}
                type={props.type}
            />
        </SInputWrapper>

    );
};

export default Input;
