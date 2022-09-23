
import UserIcon from "../../assets/icons/UserIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import PaperIcon from "../../assets/icons/PaperIcon";
import MusicIcon from "../../assets/icons/MusicIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import React from "react";
import {Property} from "csstype";
import {PATH} from "../../redux/types";
import UsersIcon from "../../assets/icons/UsersIcon";
import {useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import axios from "axios";

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
        disabled: false
    },
    {
        id: 1,
        label: "Messages",
        icon: <MessageIcon />,
        link: PATH.messages,
        disabled: false
    },
    {
        id: 2,
        label: "Users",
        icon: <UsersIcon />,
        link: PATH.users,
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
        disabled: true
    },

]