import React, {FC} from 'react';
import {SButton, SLoadingButton} from "./styled";

type TButtonProps = {
    label: string,
    onClick: () => void
    isDisabled?: boolean
    backgroundColor?: string
    size?: 'lg' | 'sm'
    isLoading?: boolean
    icon?: React.ReactElement
    needAuth?: boolean
}

const Button: FC<TButtonProps> = ({isDisabled, onClick, ...props}) => {
    const onClickHandler = () => {
        onClick();
    };
    return (
        !props.isLoading
            ? (<SButton
                hasIcon={!!props.icon}
                disabled={isDisabled}
                onClick={() => onClickHandler()}
                {...props}
            >
                {props.icon}
                {props.label}
            </SButton>)
            : (<SLoadingButton>
                {props.label}
            </SLoadingButton>)

    );
};

export default Button;
