import styled from "styled-components";

export const SErrorBox = styled.div((props) => ({
    padding: "5px 10px",
    fontSize: 12,
    borderRadius: 10,
    textAlign: "center",
    color: props.theme.colors.status.error,
    border: `1px solid ${props.theme.colors.status.error}`,
    alignSelf: "center",
}))