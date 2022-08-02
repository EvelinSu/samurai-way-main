import styled from "styled-components";
import {TSSidebarProps, TSSidebarItemIconProps, TSSidebarItemProps} from "./types";
import {theme} from "../../styles/constants";
import {Link} from "react-router-dom";

export const SSidebar = styled.div<TSSidebarProps>((props) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.primary,
    transition: "0.2s",
    padding: "13px",
    gap: 15,
    columnGap: 15,
    rowGap: 15,
    borderRadius: theme.blockSettings.borderRadius,
    width: 74,
    margin: "30px 0 30px 30px",
}))

export const SSidebarItem = styled.div<TSSidebarItemProps>(({isActive, ...props}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.1s",
    margin: props.margin,
    textDecoration: "none",
    position: "relative",
    "&:after": {
        content: `'${props.label} '`,
        backgroundColor: theme.colors.primaryDark,
        borderRadius: 10,
        padding: "0",
        height: 0,
        boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.2)",
        fontSize: 12,
        transform: "scale(0)",
        opacity: 0,
        transition: "0.2s",
    },
    "&:hover": {
        transform: "scale(0.9)",
        "&:after": {
            transform: "scale(1)",
            opacity: 1,
            padding: "5px 15px",
            height: 16,
            marginTop: 10,
        }
    },
    ...isActive && {
        pointerEvents: "none",
        "&:hover": {
            "&:after": {
                transform: "scale(0)",
                opacity: 0,
                padding: "0",
                height: 0,
                marginTop: 0,
            }
        }
    },
}))

export const SSidebarItemIcon = styled.div<TSSidebarItemIconProps>(({isActive, ...props}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.blockSettings.borderRadius,
    ...isActive && {
        backgroundColor: "transparent",
        transform: "scale(1.1)",
    },
}))

