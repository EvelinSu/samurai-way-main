import styled from "styled-components";

type TSAvatar = {
    size?: number | string,
    border?: boolean
    opacity?: string | number
}

export const SAvatar = styled.img<TSAvatar>(({border, ...props}) => ({
    objectFit: "cover",
    borderRadius: "50%",
    opacity: props.opacity,
    minWidth: props.size || 60,
    width: props.size || 60,
    height: props.size || 60,
    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    transition: "0.5s",
    ...border && {
        margin: 2,
        outline: "3px dashed rgba(255, 255, 255, 0.3)",
    }
}))