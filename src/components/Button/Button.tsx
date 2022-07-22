import React, {FC} from 'react';
import {TButtonProps} from "./types";
import {SButton} from "./styled";

const Button: FC<TButtonProps> = (props) => {
    return (
       <SButton>
           {props.label}
       </SButton>
    );
};

export default Button;
