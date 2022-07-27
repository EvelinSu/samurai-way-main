import styled from "styled-components";
import {theme} from "../styles/constants";

export const SSiteWrapper = styled.div( props => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: `linear-gradient(to left bottom, ${theme.colors.secondary}, ${theme.colors.primaryLight})`,
    height: "100vh",
    width: "100%",
    color: theme.colors.text,
}))

export const SSiteContainer = styled.div( props => ({
    display: "flex",
    height: "100%",
    gap: 30,
    columnGap: 45,
    rowGap: 40,
    padding: 30,
    width: "100%",
    maxWidth: 1000,
}))

export const SSiteContent = styled.div( props => ({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    width: "100%",
    gap: 20,
    columnGap: 25,
    rowGap: 25,
}))