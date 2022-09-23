import React, {FC, useEffect, useState} from 'react';
import {SSidebar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {useHistory, useLocation} from "react-router-dom";
import {navLinks} from "./sidebarData";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import Modal from "../../components/modal/Modal";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {setAuthUserDataAC, TAuth} from "../../redux/authReducer";
import LoginIcon from "../../assets/icons/LoginIcon";

type TSidebarProps = {}

const Sidebar: FC<TSidebarProps> = () => {
    const history = useHistory();
    const location = useLocation();

    const [isOpened, setIsOpened] = useState<boolean>(false)
    const auth = useSelector<TRootState, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
             .then(response => {
                     if (response.data.resultCode === 0) {
                         dispatch(setAuthUserDataAC(response.data.data))
                     }
                 }
             )
    }, [])

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
                label={auth ? 'LogOut' : 'LogIn'}
                onClick={() => setIsOpened(true)}
                disabled={false}
            >
                <SSidebarItemIcon>
                    {auth ? <LogoutIcon /> : <LoginIcon/>}

                </SSidebarItemIcon>
            </SSidebarItem>
            {auth
                ? <Modal type={"default"} isOpened={isOpened} setIsOpened={setIsOpened} />
                : <Modal type={"auth"} isOpened={isOpened} setIsOpened={setIsOpened} />
            }
        </SSidebar>
    );
};

export default Sidebar;

