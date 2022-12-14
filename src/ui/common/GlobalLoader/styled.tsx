import styled from "styled-components";

export const SGlobalLoader = styled.div((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: props.theme.colors.primary,
    zIndex: 100,
}))