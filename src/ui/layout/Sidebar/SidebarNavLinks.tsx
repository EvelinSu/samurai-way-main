import React from 'react';
import {navLinks} from "./navLinks";
import {SSidebarItem, SSidebarItemIcon} from "./styled";
import {useLocation} from "react-router-dom";
import {authModalToggleAC} from "../../../bll/authReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks";

type TSidebarItemProps = {
    isAuth: boolean
    onClick: (link: string) => void
}

const SidebarNavLinks: React.FC<TSidebarItemProps> = React.memo((props) => {
    const dispatch = useAppDispatch()
    const location = useLocation();

    const isAuth = useAppSelector(state => state.auth.isAuth)

    const onItemClickHandler = (needAuth?: boolean, link?: string) => {
        needAuth && !isAuth
            ? dispatch(authModalToggleAC(true))
            : link && props.onClick(link)
    }

    return (
        <>
            {navLinks.map(({disabled, link, icon, label, id, margin, needAuth}) => (
                <SSidebarItem
                    disabled={disabled}
                    label={label}
                    key={id}
                    margin={margin}
                    isActive={link ? location.pathname.includes(link) : false}
                    onClick={() => onItemClickHandler(needAuth, link)}
                >
                    <SSidebarItemIcon isActive={link ? location.pathname.includes(link) : false}>
                        {icon}
                    </SSidebarItemIcon>
                </SSidebarItem>
            ))}
        </>
    );
});

export default SidebarNavLinks;
