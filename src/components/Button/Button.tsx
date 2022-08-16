import React, {FC} from 'react';
import {TButtonProps} from "./types";
import {SButton} from "./styled";

const Button: FC<TButtonProps> = ({isDisabled, onClick, ...props}) => {
    const onClickHandler = () => {
        onClick();
    };
    return (
       <SButton disabled={isDisabled} onClick={() => onClickHandler()}>
           {props.label}
       </SButton>
    );
};

export default Button;
