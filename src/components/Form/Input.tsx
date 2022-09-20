import React from 'react';
import {SInput} from "./styled";


type TInputProps = {
    placeholder?: string
    value?: string
}

const Input: React.FC<TInputProps> = (props) => {

    return (
        <SInput
            placeholder={props.placeholder || 'Введите текст...'}
            value={props.value}
        />
    );
};

export default Input;
