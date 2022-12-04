import styled, {css} from "styled-components";
import {theme} from "../../styles/constants";

type TSNotificationWrapper = {
    notificationsCount: string | number;
};
export const SNotificationWrapper = styled.div<TSNotificationWrapper>`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    bottom: 20px;
    left: 50%;
    right: 50%;
    color: #fff;
    z-index: ${theme.orders.notifications};
    ${(props) =>
            props.notificationsCount > 1 &&
            css`
                &:after {
                    content: "${props.notificationsCount}";
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: ${theme.colors.secondary};
                    color: ${theme.colors.textOnSecondary};
                    box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.1), -1px -1px 2px rgb(0, 0, 0, 0.1);
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    font-size: 12px;
                    position: absolute;
                    right: -170px;
                    top: -70px;
                    z-index: ${theme.orders.notifications};
                }
            `}
`;

type TSNotificationContainerProps = {
    severity?: "error" | "success";
};
export const SNotificationContainer = styled.div<TSNotificationContainerProps>`
    display: flex;
    position: absolute;
    bottom: 100%;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    color: #fff;
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    width: 330px;
    height: 60px;
    padding: 10px 20px;
    background-color: ${(props) =>
            props.severity === "error"
                    ? theme.colors.status.error
                    : props.severity === "success"
                            ? theme.colors.status.success
                            : theme.colors.primary};
    z-index: ${theme.orders.notifications};

    &:last-of-type {
        box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.3);
    }
`;

export const SNotificationIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    margin-left: auto;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;
