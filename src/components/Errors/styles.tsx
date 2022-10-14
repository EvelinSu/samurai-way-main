import styled from "styled-components";
import {theme} from "../../styles/constants";

export const SErrorBox = styled.div((props) => ({

    padding: "5px 10px",
    fontSize: 12,
    borderRadius: 10,
    textAlign: "center",
    color: theme.colors.status.error,
    border: `1px solid ${theme.colors.status.error}`,
    alignSelf: "center",
}))