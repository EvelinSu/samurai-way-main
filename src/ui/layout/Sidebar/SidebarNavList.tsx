import React from 'react';
import {navLinks} from "./sidebarData";
import {SSidebarItem, SSidebarItemIcon} from "./styled";
import {useLocation} from "react-router-dom";

type TSidebarItemProps = {
    isAuth: boolean
    onClick: (link: string) => void
}

const SidebarNavList: React.FC<TSidebarItemProps> = React.memo((props) => {

    const location = useLocation();


    return (
        <>
            {navLinks.map(({disabled, needAuth, link, icon, label, id, margin}) => (
                <SSidebarItem
                    disabled={disabled || (needAuth  && !props.isAuth)}
                    label={label}
                    key={id}
                    margin={margin}
                    isActive={link ? location.pathname.includes(link) : false}
                    onClick={() => link && props.onClick(link)}
                >
                    <SSidebarItemIcon isActive={link ? location.pathname.includes(link) : false}>
                        {icon}
                    </SSidebarItemIcon>
                </SSidebarItem>
            ))}
        </>

    );
});

export default SidebarNavList;
