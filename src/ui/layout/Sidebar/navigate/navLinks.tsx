import MessageIcon from "../../../assets/icons/MessageIcon";
import PaperIcon from "../../../assets/icons/PaperIcon";
import MusicIcon from "../../../assets/icons/MusicIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import React from "react";
import {Property} from "csstype";
import {PATH} from "../../../routes/types";
import UsersIcon from "../../../assets/icons/UsersIcon";

export type TNavLink = {
    id: number,
    label: string,
    icon: JSX.Element,
    link?: string,
    margin?: Property.Margin,
    needAuth?: boolean
    disabled?: boolean
}

export const navLinks: Array<TNavLink> = [
    {
        id: 1,
        label: "Messages",
        icon: <MessageIcon />,
        link: PATH.messages,
        needAuth: true,
        disabled: false
    },
    {
        id: 2,
        label: "Users",
        icon: <UsersIcon />,
        link: `${PATH.users}`,
        disabled: false
    },
    {
        id: 3,
        label: "News",
        icon: <PaperIcon />,
        link: PATH.news,
        disabled: true
    },
    {
        id: 4,
        label: "Music",
        icon: <MusicIcon />,
        link: PATH.music,
        disabled: true
    },
    {
        id: 5,
        label: "Settings",
        icon: <SettingsIcon />,
        margin: "auto 0 0 0",
        link: PATH.settings,
        needAuth: true,
    },
]