import styled from "styled-components";
import {theme} from "../../styles/constants";

export const SInputWrapper = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,

}))

export const SInput = styled.input((props) => ({
    padding: "8px 15px",
    borderRadius: theme.blockSettings.borderRadius,
    backgroundColor: theme.colors.input.default,
    width: "100%",
    "&:hover": {
        opacity: 0.8
    },
    "&:focus": {
        outline: `1px solid ${theme.colors.primaryLightest}`,
        opacity: 1,
    },
}))