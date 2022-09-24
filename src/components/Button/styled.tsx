import styled, {css, keyframes} from "styled-components";
import {theme} from "../../styles/constants";

type TSButtonProps = {
    disabled?: boolean
    backgroundColor?: string
    size?: 'lg' | 'sm'
    isLoading?: boolean
}

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

export const SButton = styled.button<TSButtonProps>(({disabled, ...props}) => ({
    padding: "7px 15px",
    borderRadius: 10,
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
        padding: "10px 20px",
        borderRadius: 25,
        fontSize: 18,
    },
}))

export const SLoadingButton = styled(SButton)`
  pointer-events: none;
  animation: 1s ${buttonLoad} ease-out infinite;
  background-color: ${theme.colors.button.cancel};
  opacity: 1;
  transition: 0.2s;
`