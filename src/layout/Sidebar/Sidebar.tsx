import React, {FC, useEffect, useState} from 'react';
import {SSidebar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {useHistory, useLocation} from "react-router-dom";
import {navLinks} from "./sidebarData";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import Modal from "../../components/modal/Modal";

import LoginIcon from "../../assets/icons/LoginIcon";

type TSidebarProps = {
    myId: number,
    isAuth: boolean
}

const Sidebar: FC<TSidebarProps> = ({isAuth, myId}) => {
    const history = useHistory();
    const location = useLocation();

    const [isOpened, setIsOpened] = useState<boolean>(false)

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
            <SSidebarItem
                label={isAuth ? 'LogOut' : 'LogIn'}
                onClick={() => setIsOpened(true)}
                disabled={false}
            >
                <SSidebarItemIcon>
                    {isAuth ? <LogoutIcon /> : <LoginIcon/>}

                </SSidebarItemIcon>
            </SSidebarItem>
            {isAuth
                ? <Modal type={"default"} isOpened={isOpened} setIsOpened={setIsOpened} />
                : <Modal type={"auth"} isOpened={isOpened} setIsOpened={setIsOpened} />
            }
        </SSidebar>
    );
};

export default Sidebar;

