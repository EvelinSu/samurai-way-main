import styled, {keyframes} from "styled-components";
import React, {DetailedHTMLProps} from "react";
import {Property} from "csstype";

const buttonLoad = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    50% {
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.3);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`
export type DefaultHTMLButtonType = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type TSButton = DefaultHTMLButtonType & {
    backgroundColor: Property.BackgroundColor,
    size: 'lg' | 'sm',
    hasIcon: boolean,
}

export const SButton = styled.button<Partial<TSButton>>(({disabled, theme, ...props}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    padding: "7px 20px",
    borderRadius: 20,
    backgroundColor: props.backgroundColor || theme.colors.button.success,
    color: "#fff",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
        opacity: 0.8
    },
    ...disabled && {
        opacity: 0.4,
        pointerEvents: "none",
    },
    ...props.size === 'lg' && {
        padding: "10px 25px",
        borderRadius: 25,
        fontSize: 18,
    },
    ...props.hasIcon && {
        gap: 10,
        svg: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            width: 20,
            height: 20,
        }
    }
}))

export const SLoadingButton = styled(SButton)`
    pointer-events: none;
    animation: 1s ${buttonLoad} ease-out infinite;
    background-color: ${({theme}) => theme.colors.button.cancel};
    opacity: 0.8;
    transition: 0.2s;
`

