import React, {FC} from 'react';
import {TDialogsProps} from "./types";
import {SFlexBlock} from "../../components/FlexBlock/SFlexBlock";
import {
    SDialogs,
    SDialogsItem,
    SDialogsItemsList,
    SDialogWindow,
    SDialogWindowBody,
    SDialogWindowFooter,
    SDialogWindowHeader
} from "./styled";
import {SAvatar} from "../../components/Avatar/SAvatar";
import {SText} from "../../components/Text/SText";
import {TMessageProps} from "./Message/types";

const Dialogs: FC<TDialogsProps> = () => {
    return (
        <SDialogs>
            <SDialogsItemsList>
                {MessagesArr.map(({id, name, text, time, avatar}) => (
                    <SDialogsItem key={id}>
                        <SAvatar size={50} src={avatar} />
                        <SFlexBlock gap={5} flexDirection={"column"} overflow={"hidden"}>
                            <SFlexBlock alignItems={"center"} justifyContent={"space-between"}>
                                <SText isEllipsis fontWeight={900}>
                                    {name}
                                </SText>
                                <SText opacity={0.5}>
                                    {time}
                                </SText>
                            </SFlexBlock>
                            <SText isEllipsis>
                                {text}
                            </SText>
                        </SFlexBlock>
                    </SDialogsItem>
                ))}
            </SDialogsItemsList>
            <SDialogWindow>
                <SDialogWindowHeader>
                    Хэдер
                </SDialogWindowHeader>
                <SDialogWindowBody>
                    Бади
                </SDialogWindowBody>
                <SDialogWindowFooter>
                    Футер
                </SDialogWindowFooter>
            </SDialogWindow>
        </SDialogs>
    );
};

export default Dialogs;

const MessagesArr: Array<TMessageProps> = [
    {
        id: 0,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 1,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },

    {
        id: 2,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 3,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 4,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 5,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 6,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 7,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 8,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 9,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 10,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 11,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 12,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
    {
        id: 13,
        name: "Nickname",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet",
        time: "15:54",
        avatar: "https://i.imgur.com/a2GuVCv.png"

    },
]