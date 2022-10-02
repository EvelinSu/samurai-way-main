import React, {FC, useEffect, useState} from 'react';
import {SSidebar, SSidebarAvatar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {useHistory, useLocation} from "react-router-dom";
import {navLinks} from "./sidebarData";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import Modal from "../../components/modal/Modal";
import LoginIcon from "../../assets/icons/LoginIcon";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {getAuthThunk, TAuth} from "../../redux/authReducer";
import { SAvatar } from '../../components/Avatar/SAvatar';
import defaultPhoto from  '../../assets/img/default-photo.png'
import {PATH} from "../../redux/types";

type TSidebarProps = {

}

const Sidebar: FC<TSidebarProps> = (props) => {
    const state = useSelector<TRootState, TAuth>(state => state.auth)

    const history = useHistory();
    const location = useLocation();

    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <SSidebar>
            <SSidebarAvatar
                disabled={!state.isAuth}
                isActive={location.pathname === (PATH.profile + '/' + state.id)}
                onClick={() => history.push(PATH.profile + '/' + state.id)}
            >
                <SAvatar size={40} src={defaultPhoto}/>
            </SSidebarAvatar>
            {navLinks.map(({disabled, needAuth, link, icon, label, id, margin}) => (
                <SSidebarItem
                    disabled={disabled || (needAuth  && !state.isAuth)}
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
                label={state.isAuth ? 'LogOut' : 'LogIn'}
                onClick={() => setIsOpened(true)}
                disabled={false}
            >
                <SSidebarItemIcon>
                    {state.isAuth ? <LogoutIcon /> : <LoginIcon/>}
                </SSidebarItemIcon>
            </SSidebarItem>
            {state.isAuth
                ? <Modal type={"default"} isOpened={isOpened} setIsOpened={setIsOpened} />
                : setTimeout(() => <Modal type={"auth"} isOpened={isOpened || !state.isAuth} setIsOpened={setIsOpened} />, 500)
            }
        </SSidebar>
    );
};

export default Sidebar;

