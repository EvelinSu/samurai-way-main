import styled from "styled-components";
import {theme} from "../../../styles/constants";

type TSDialogItemProps = {
    isActive: boolean,
}
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