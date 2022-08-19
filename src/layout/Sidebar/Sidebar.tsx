import React, {FC, useState} from 'react';
import {SSidebar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {TSidebarProps} from "./types";
import {useHistory, useLocation} from "react-router-dom";
import {navLinks} from "./sidebarData";


const Sidebar: FC<TSidebarProps> = () => {

    const history = useHistory();
    const location = useLocation();

    return (
        <SSidebar>
            {navLinks.map(({link, icon, label, id, margin}) => (
                <SSidebarItem
                    label={label}
                    key={id}
                    margin={margin}
                    isActive={link ? location.pathname.includes(link) : false}
                    onClick={() => link && history.push(link)}
                >
                    <SSidebarItemIcon isActive={link ? location.pathname.includes(link) : false}>
                        {icon}
                    </SSidebarItemIcon>
                </SSidebarItem>
            ))}
        </SSidebar>
    );
};

export default Sidebar;

