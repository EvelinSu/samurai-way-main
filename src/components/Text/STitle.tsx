import styled from "styled-components";
import {TSTitleProps} from "./types";

export const STitle = styled.span<TSTitleProps>((props) => ({
    fontWeight: "bold",
    fontSize: 18,
    color: props.color
}))