import React, {FC, Fragment, useState} from 'react';
import {TDialogsProps} from "./types";
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {
    SDialogs,
    SDialogsItem,
    SDialogsItemsList,
    SDialogWindow,
    SDialogWindowBody,
    SDialogWindowFooter,
    SDialogWindowHeader, SNoneDialog
} from "./styled";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {useHistory, useParams} from "react-router-dom";
import Message from '../../components/Message/Message';
import {TMessageProps} from "../../components/Message/types";
import {STitle} from "../../components/Text/STitle";
import {SScrollContainer} from "../../components/ScrollContainer/ScrollContainer";
import { STextarea } from '../../components/Textarea/STextarea';

const Dialogs: FC<TDialogsProps> = () => {

    const {id} = useParams<{ id: string }>();

    const history = useHistory();

    return (
        <SDialogs>
            <SDialogWindow>
                {id ? (
                    <Fragment>
                        <SDialogWindowHeader>
                            <SAvatar size={40}
                                     src={Messages[id].avatar}
                            />
                            <SFlexBlock gap={1} flexDirection={"column"}>
                                <STitle>
                                    {Messages[id].name}
                                </STitle>
                                <SText opacity={0.5} fontSize={"14px"}>
                                    Последняя активность: сегодня
                                </SText>
                            </SFlexBlock>
                        </SDialogWindowHeader>
                        <SDialogWindowBody>
                            <SScrollContainer>
                                {
                                    Messages[id].messages.map((message) => (
                                        <Message key={message.id}
                                                 text={message.text}
                                                 time={message.time}
                                                 me={message.me}
                                        />
                                    ))
                                }
                            </SScrollContainer>
                        </SDialogWindowBody>
                        <SDialogWindowFooter>
                            <STextarea height={"60px"} placeholder={"Написать сообщение"}/>
                        </SDialogWindowFooter>
                    </Fragment>

                ) : (
                    <SNoneDialog>
                        Выберите диалог
                    </SNoneDialog>
                )}
            </SDialogWindow>
            <SDialogsItemsList>
                {Object.keys(Messages).map((key) => {
                    const {name, avatar, messages} = Messages[key];
                    return (
                        <SDialogsItem isActive={id === key} key={key} onClick={() => history.push(`/messages/${key}`)}>
                            <SAvatar size={40} src={avatar} />
                            <SFlexBlock gap={5} flexDirection={"column"} overflow={"hidden"}>
                                <SFlexBlock alignItems={"center"} justifyContent={"space-between"}>
                                    <SText isEllipsis fontWeight={900}>
                                        {name}
                                    </SText>
                                    <SText opacity={0.5}>
                                        {messages && messages[messages.length - 1].time}
                                    </SText>
                                </SFlexBlock>
                                <SText isEllipsis>
                                    {messages && messages[messages.length - 1].text}
                                </SText>
                            </SFlexBlock>
                        </SDialogsItem>
                    )
                })}
            </SDialogsItemsList>
        </SDialogs>
    );
};

export default Dialogs;

type Dictionary<T> = {
    [Key: string]: T;
}

type Dialog = {
    name: string,
    messages: Array<TMessageProps>,
    avatar: string
}

const Messages: Dictionary<Dialog> = {
    "1": {
        name: "Nick",
        avatar: "https://i.imgur.com/N3ErVCc.png",
        messages: [
            {
                id: 1,
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: 2,
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: 3,
                text: "Lorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: 4,
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: 5,
                text: "Lorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: 6,
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: 7,
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: 8,
                text: "consectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit ametconsectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: 9,
                text: "Lorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: 10,
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
            {
                id: 11,
                text: "Lorem ipsum ing sit ametLorem ipsum ing sit ametLorem ipsum ing sit amet",
                time: "15:54",
                me: true,
            },
            {
                id: 12,
                text: "consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:54",
            },
        ],

    },
    "2": {
        name: "name",
        avatar: "https://i.imgur.com/a2GuVCv.png",
        messages: [
            {
                id: 1,
                text: "Lorem ipsum t amet,scing elitLorem ipsum dolor sit amet",
                time: "15:44",
                me: true,
            },
            {
                id: 2,
                text: "olor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:24",
            },
        ],
    },
    "3": {
        name: "Text",
        avatar: "https://i.imgur.com/1Skz4Sj.png",
        messages: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:24",
                me: true,
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:53",
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
                time: "15:14",
            },
        ],

    }
}