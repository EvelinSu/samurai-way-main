import styled from "styled-components";
import {TFlexBlockProps} from "./types";

export const SFlexBlock = styled.div<TFlexBlockProps>((props)=> ({
    display: "flex",
    flexDirection: props.flexDirection,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    columnGap: props.gap || 30,
    rowGap: props.gap || 10,
    margin: props.margin,
    padding: props.padding,
    backgroundColor: props.backgroundColor,
    maxWidth: props.maxWidth,
    color: props.color,
    width: props.width,
    height: props.height,
    opacity: props.opacity,
    overflow: props.overflow,
    flexWrap: props.flexWrap,
    flexGrow: props.flexGrow,
}))