import styled from "styled-components";
import {theme} from "../../styles/constants";
import {TSDialogItemProps} from "./DialogItem/types";

export const SDialogs = styled.div((props) => ({
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

export const SDialogItem = styled.div<TSDialogItemProps>(({isActive, ...props}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    padding: 10,
    borderRadius: theme.blockSettings.borderRadius,
    backgroundColor: theme.colors.primaryLight,
    gap: 15,
    fontSize: 14,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: theme.colors.primary,
    },
    ...isActive && {
        pointerEvents: "none",
        backgroundColor: theme.colors.primary,
    },

}))

export const SDialogContainer = styled.div((props) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    borderRadius: theme.blockSettings.borderRadius,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
}))

export const SNoneDialog = styled.div((props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    opacity: 0.6,

}))

export const SDialogWindowHeader = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    padding: "10px 15px",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.blockSettings.borderRadius,
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
