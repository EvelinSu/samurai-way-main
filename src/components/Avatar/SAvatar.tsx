import styled from "styled-components";

type TSAvatar = {
    size?: number,
    border?: boolean
}

export const SAvatar = styled.img<TSAvatar>(({border, ...props}) => ({
    objectFit: "cover",
    borderRadius: "50%",
    minWidth: props.size || 60,
    width: props.size || 60,
    height: props.size || 60,
    ...border && {
        margin: 2,
        outline: "2px dashed rgba(255, 255, 255, 0.3)",
    }
}))