import React, {useState} from 'react';
import {SSidebar, SSidebarAvatar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {useHistory , useLocation} from "react-router-dom";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import Modal from "../../components/modal/Modal";
import LoginIcon from "../../assets/icons/LoginIcon";
import {shallowEqual} from "react-redux";
import {
    authModalToggleAC,
    logoutThunk,
} from "../../redux/authReducer";
import {SAvatar} from '../../components/Avatar/SAvatar';
import defaultPhoto from '../../assets/img/default-photo.png'
import {PATH} from "../../redux/types";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import SidebarNavList from "./SidebarNavList";

const Sidebar = React.memo(() => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.auth, shallowEqual)

    const history = useHistory();
    const location = useLocation();

    const [isOpened, setIsOpened] = useState<boolean>(false)

    const onClickHandler = () => {
        if (!state.isAuth) {
            return dispatch(authModalToggleAC(true))
        } else {
            setIsOpened(true)
        }
    }

    const onSidebarNavClickHandler = (link: string) => {
        link && history.push(link)
    }

    const logoutHandler = () => {
        dispatch(logoutThunk())
        setIsOpened(false)
    }

    return (
        <SSidebar>
            <SSidebarAvatar
                // disabled={!state.isAuth}
                isActive={location.pathname === (PATH.profile + '/' + state.id)}
                onClick={() => history.push(PATH.profile + '/' + state.id)}
            >
                <SAvatar size={40} src={defaultPhoto} />
            </SSidebarAvatar>
            <SidebarNavList
                isAuth={state.isAuth}
                onClick={onSidebarNavClickHandler}
            />
            <SSidebarItem
                label={state.isAuth ? 'LogOut' : 'LogIn'}
                onClick={onClickHandler}
                disabled={false}
            >
                <SSidebarItemIcon>
                    {state.isAuth ? <LogoutIcon /> : <LoginIcon />}
                </SSidebarItemIcon>
            </SSidebarItem>
            {isOpened &&
                <Modal type={"default"} onSuccessClick={logoutHandler} isOpened={isOpened} setIsOpened={setIsOpened} />}
        </SSidebar>
    );
});

export default Sidebar;

