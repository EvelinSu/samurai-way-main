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
        border: "2px solid rgba(255, 255, 255, 0.3)",
        padding: 5,
        margin: 3,
        outline: "3px dashed rgba(255, 255, 255, 0.3)",
    }


}))