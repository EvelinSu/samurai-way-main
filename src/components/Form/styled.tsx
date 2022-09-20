import styled from "styled-components";
import {theme} from "../../styles/constants";

export const SInput = styled.input((props) => ({
    padding: "8px 15px",
    borderRadius: theme.blockSettings.borderRadius,
    backgroundColor: theme.colors.input.default
}))