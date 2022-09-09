import styled from "styled-components";
import {theme} from "../../styles/constants";
import {Box} from "../../components/Box/Box";



export const SDialogs = styled.div(props => ({
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    gap: 20,
    height: "100%",

}))

export const SDialogsSidebar = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 250,
    width: "100%",
    fontSize: 14,
    gap: 10,
}))

export const SDialogsItemsList = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "auto",
    gap: 10,
}))


export const SDialogContainer = styled(Box)((props) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    borderRadius: theme.blockSettings.borderRadius,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
}))

export const SNoneDialog = styled.div((props) => ({
    alignSelf: "center",
    opacity: 0.6,
    borderRadius: theme.blockSettings.borderRadius,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "3px 15px",

}))

export const SDialogWindowHeader = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    padding: "10px 15px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: `${theme.blockSettings.borderRadius} 0 ${theme.blockSettings.borderRadius} 0`,
    gap: 20,

}))

export const SDialogWindowBody = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
    gap: 20,
}))

export const SDialogWindowFooter = styled.div((props) => ({
    display: "flex",
    gap: 20,
    padding: 10,
    borderRadius: theme.blockSettings.borderRadius,

}))
