import styled from "styled-components";
import {STitle} from "../common/Text/STitle";

export const SPagePanel = styled.div((props) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}))

export const SPagePanelTitle = styled(STitle)((props) => ({
    fontSize: 20,
    fontWeight: 600,
    opacity: 0.6
}))