
import UserIcon from "../../assets/icons/UserIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import PaperIcon from "../../assets/icons/PaperIcon";
import MusicIcon from "../../assets/icons/MusicIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import React from "react";
import {Property} from "csstype";
import {PATH} from "../../redux/types";

type TNavLink = {
    id: number,
    label: string,
    icon: JSX.Element,
    link?: string,
    margin?: Property.Margin,
    disabled?: boolean
}

type TNavLinks = Array<TNavLink>

export const navLinks: TNavLinks = [
    {
        id: 0,
        label: "Profile",
        icon: <UserIcon />,
        link: PATH.profile,
    },
    {
        id: 1,
        label: "Messages",
        icon: <MessageIcon />,
        link: PATH.messages,
    },
    {
        id: 2,
        label: "News",
        icon: <PaperIcon />,
        link: PATH.news,
        disabled: true
    },
    {
        id: 3,
        label: "Music",
        icon: <MusicIcon />,
        link: PATH.music,
        disabled: true

    },
    {
        id: 4,
        label: "Settings",
        icon: <SettingsIcon />,
        margin: "auto 0 0 0",
        link: PATH.settings,
        disabled: true
    },
    {
        id: 5,
        label: "LogOut",
        icon: <LogoutIcon />,
        disabled: true
    }
]