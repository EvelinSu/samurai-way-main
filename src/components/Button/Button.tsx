import React, {FC} from 'react';
import {SButton, SLoadingButton} from "./styled";

type TButtonProps = {
    label: string,
    onClick: () => void
    isDisabled?: boolean
    backgroundColor?: string
    size?: 'lg' | 'sm'
    isLoading?: boolean
}

const Button: FC<TButtonProps> = ({isDisabled, onClick, ...props}) => {
    const onClickHandler = () => {
        onClick();
    };
    return (
        !props.isLoading
            ? (<SButton
                disabled={isDisabled}
                onClick={() => onClickHandler()}
                {...props}
            >
                {props.label}
            </SButton>)
            : (<SLoadingButton>
                {props.label}
            </SLoadingButton>)

    );
};

export default Button;
