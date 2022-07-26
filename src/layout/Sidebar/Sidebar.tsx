import React, {FC, useState} from 'react';
import {SSidebar, SSidebarItem, SSidebarItemIcon} from "./styled";
import MessageIcon from "../../assets/icons/MessageIcon";
import UserIcon from "../../assets/icons/UserIcon";
import PaperIcon from "../../assets/icons/PaperIcon";
import MusicIcon from "../../assets/icons/MusicIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import {TNavLinks, TSidebarProps} from "./types";

const Sidebar: FC<TSidebarProps> = () => {
    const [activeTab, setActiveTab] = useState(navLinks[0].label)
    return (
        <SSidebar>
            {navLinks.map(({link, icon, label, id, margin}) => (
                    <SSidebarItem to={link}
                                  label={label}
                                  key={id} margin={margin}
                                  isActive={activeTab === label}
                                  onClick={() => setActiveTab(label)}
                    >
                        <SSidebarItemIcon isActive={activeTab === label}>
                            {icon}
                        </SSidebarItemIcon>
                    </SSidebarItem>
            ))}
        </SSidebar>
    );
};


export default Sidebar;

const navLinks : TNavLinks = [
    {
        id: 0,
        label: "Profile",
        icon: <UserIcon />,
        link: "/profile",
    },
    {
        id: 1,
        label: "Messages",
        icon: <MessageIcon />,
        link: "/messages",
    },
    {
        id: 2,
        label: "News",
        icon: <PaperIcon />,
        link: "/news",
    },
    {
        id: 3,
        label: "Music",
        icon: <MusicIcon />,
        link: "/music",
    },
    {
        id: 4,
        label: "Settings",
        icon: <SettingsIcon />,
        margin: "auto 0 0 0",
        link: "/settings",
    },
    {
        id: 5,
        label: "LogOut",
        icon: <LogoutIcon />
    }
]