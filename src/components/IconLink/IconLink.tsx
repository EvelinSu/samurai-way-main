import React, {ReactNode} from 'react';
import {SIconLink} from "./styled";

type TIconLinkProps = {
    link?: string
    label?: string
    icon?: string
}

const IconLink: React.FC<TIconLinkProps> = (props) => {
    return (
        <SIconLink
            title={props.label}
            href={props.link}
            target="_ blank"
            isDisabled={!props.link}
        >
            {props.icon}
        </SIconLink>
    );
};

export default IconLink;
