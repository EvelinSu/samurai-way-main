import styled from "styled-components";
import {theme} from "../../styles/constants";

export const SButton = styled.button((props) => ({
    padding: "7px 15px",
    borderRadius: 10,
    backgroundColor: theme.colors.button.success,
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
        opacity: 0.8
    }
}))