import styled from "styled-components";
import {TSAvatar} from "./types";

export const SAvatar = styled.img<TSAvatar>(props => ({
    objectFit: "cover",
    borderRadius: "50%",
    minWidth: props.size || 60,
    width: props.size || 60,
    height: props.size || 60,
}))