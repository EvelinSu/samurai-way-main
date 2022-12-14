import styled from "styled-components";

export const SDialogItem = styled.div<{ isActive?: boolean }>(({isActive, theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    height: 63,
    padding: 10,
    borderRadius: theme.blockSettings.borderRadius,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
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

export const SDialogItemHeader = styled.div(props => ({
    display: "flex",
    width: "100%",
    gap: "5",
    flexDirection: "column",
    overflow: "hidden"
}))