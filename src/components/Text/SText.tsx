import styled from "styled-components";
import {Property} from "csstype";

type TSTextProps = {
    isEllipsis?: boolean,
    opacity?: string | number,
    fontWeight?: Property.FontWeight,
    fontSize?: Property.FontSize,
}
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