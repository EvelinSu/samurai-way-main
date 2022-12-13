import React, {useEffect, useState} from "react";
import {SNotificationContainer, SNotificationIcon, SNotificationWrapper} from "./styled";
import {SText} from "../Text/SText";
import {hideAppMessage, setAppLastMessage} from "../../../bll/appReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks";
import CloseIcon from "../../assets/icons/CloseIcon";

const Notification = () => {
    const dispatch = useAppDispatch();
    const {messages} = useAppSelector((state) => state.app);

    const [timerId, setTimerId] = useState(0);

    const setIsOpen = (id: string) => {
        dispatch(hideAppMessage(id));
    };

    const stopTimer = () => {
        clearInterval(timerId);
    };

    const startTimer = () => {
        stopTimer();
        const id: number = window.setInterval(() => {
            dispatch(setAppLastMessage());
        }, 2900);
        setTimerId(id);
    };

    useEffect(() => {
        messages.length ? startTimer() : stopTimer();
    }, [messages]);

    return messages ? (
        <SNotificationWrapper notificationsCount={messages.length < 100 ? messages.length : "99+"}>
            {messages.map(({id, severity, text}) => (
                <SNotificationContainer
                    onMouseOver={stopTimer}
                    onMouseLeave={startTimer}
                    key={id}
                    severity={severity}
                >
                    <SText lineClamp={2}>{text}</SText>
                    <SNotificationIcon onClick={() => setIsOpen(id)}>
                        <CloseIcon />
                    </SNotificationIcon>
                </SNotificationContainer>
            ))}
        </SNotificationWrapper>
    ) : (
        <></>
    );
};

export default Notification;
