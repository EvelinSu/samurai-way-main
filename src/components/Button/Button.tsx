import React, {FC} from 'react';
import {TButtonProps} from "./types";
import {SButton} from "./styled";

const Button: FC<TButtonProps> = ({ onClick, ...props}) => {
    const onClickHandler = () => {
        onClick();
    };
    return (
       <SButton onClick={() => onClickHandler()}>
           {props.label}
       </SButton>
    );
};

export default Button;
