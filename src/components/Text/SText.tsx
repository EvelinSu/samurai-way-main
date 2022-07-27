import styled from "styled-components";
import {TSTextProps} from "./types";

export const SText = styled.span<TSTextProps>((props) => ({
    opacity: props.opacity,
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    ...props.isEllipsis && {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }

}))