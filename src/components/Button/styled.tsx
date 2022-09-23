import styled from "styled-components";
import {theme} from "../../styles/constants";

type TSButtonProps = {
    disabled?: boolean
    backgroundColor?: string
    size?: 'lg' | 'sm'
}

export const SButton = styled.button<TSButtonProps>(({disabled, ...props}) => ({
    padding: "7px 15px",
    borderRadius: 10,
    backgroundColor: props.backgroundColor || theme.colors.button.success,
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
        opacity: 0.8
    },
    ...disabled && {
        opacity: 0.4,
        pointerEvents: "none",
    },
    ...props.size === 'lg' && {
        padding: "10px 20px",
        borderRadius: 25,
        fontSize: 18,
    }
}))