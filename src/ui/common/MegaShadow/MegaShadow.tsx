import styled from "styled-components";

export const MegaShadow = styled.div((props) => ({
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    padding: "70px 20px",
    overflow: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 10
}))