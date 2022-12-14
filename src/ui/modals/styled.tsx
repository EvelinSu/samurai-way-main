import styled from "styled-components";
import {Property} from "csstype";

export const SModalWrapper = styled.div<{ width?: Property.Width }>(({theme, width}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    gap: 30,
    padding: "40px 30px",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.blockSettings.borderRadius,
    maxWidth: width || 350,
    width: "100%",
    height: "min-content",
    margin: "auto  0"
}))