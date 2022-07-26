import styled from "styled-components";
import {theme} from "../../styles/constants";

export const SDialogs = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
}))

export const SDialogsItemsList = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 300,
    fontSize: 14,
    overflow: "auto",
}))
export const SDialogsItem = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    padding: 10,
    gap: 20,
    borderBottom: `1px solid ${theme.colors.primaryLight}`,
    fontSize: 14,
    cursor: "pointer",
    "&:last-of-type": {
        borderBottom: "none"
    },
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
}))

export const SDialogWindow = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",

}))
export const SDialogWindowHeader = styled.div((props) => ({
    height: 60,
    padding: 10,
}))
export const SDialogWindowBody = styled.div((props) => ({
    flexGrow: 1,
    padding: 10,
    overflow: "auto",
}))
export const SDialogWindowFooter = styled.div((props) => ({
    padding: 10,
    height: 60,
}))
