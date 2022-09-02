import React, {FC} from 'react';
import {SSidebar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {useHistory, useLocation} from "react-router-dom";
import {navLinks} from "./sidebarData";

type TSidebarProps = {}
const Sidebar: FC<TSidebarProps> = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <SSidebar>
            {navLinks.map(({disabled, link, icon, label, id, margin}) => (
                <SSidebarItem
                    disabled={disabled}
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

