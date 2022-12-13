import styled from "styled-components";
import {theme} from "../../styles/constants";

type TSNotificationWrapper = {
    notificationsCount: string | number;
};
export const SNotificationWrapper = styled.div<TSNotificationWrapper>(props => ({
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    bottom: 20,
    left: "50%",
    right: "50%",
    color: "#fff",
    zIndex: theme.orders.notifications,
    ...props.notificationsCount > 1 && {
        "&:after": {
            content: "${props.notificationsCount}",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.secondary,
            color: theme.colors.textOnSecondary,
            boxShadow: "1px 1px 2px rgb(0, 0, 0, 0.1), -1px -1px 2px rgb(0, 0, 0, 0.1)",
            width: 30,
            height: 30,
            borderRadius: "50%",
            fontSize: 12,
            position: "absolute",
            right: -170,
            top: -70,
            zIndex: theme.orders.notifications,
        }
    }
}))

type TSNotificationContainerProps = {
    severity?: "error" | "success";
};
export const SNotificationContainer = styled.div<TSNotificationContainerProps>(props => ({
    display: "flex",
    position: "absolute",
    bottom: "100%",
    alignItems: "center",
    gap: 20,
    borderRadius: 10,
    color: "#fff",
    overflow: "hidden",
    fontSize: 12,
    lineHeight: 20,
    width: 330,
    height: 60,
    padding: "10px 20px",
    backgroundColor:
        props.severity === "error"
            ? theme.colors.status.error
            : props.severity === "success"
                ? theme.colors.status.success
                : theme.colors.primary,
    zIndex: theme.orders.notifications,
    "&:last-of-type": {
        boxShadow: "0 0 5px 0 rgb(0, 0, 0, 0.3)",
    }
}))

export const SNotificationIcon = styled.div(props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 30,
    marginLeft: "auto",
    height: 30,
    borderRadius: "50%",
    cursor: "pointer",
    svg: {
        width: 18,
        height: 18,
    },
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    }
}))