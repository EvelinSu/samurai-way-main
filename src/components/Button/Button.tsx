import React, {FC} from 'react';
import {SButton} from "./styled";

type TButtonProps = {
    label: string,
    onClick: () => void
    isDisabled?: boolean
}

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
