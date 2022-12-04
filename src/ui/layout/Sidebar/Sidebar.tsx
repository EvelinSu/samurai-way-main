import React, {useState} from 'react';
import {SSidebar, SSidebarAvatar, SSidebarItem, SSidebarItemIcon} from "./styled";
import {useHistory, useLocation} from "react-router-dom";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import Modal from "../../modals/Modal";
import LoginIcon from "../../assets/icons/LoginIcon";
import {shallowEqual} from "react-redux";
import {
    authModalToggleAC,
    logoutThunk,
} from "../../../bll/authReducer";
import defaultPhoto from '../../assets/img/default-photo.png'
import {PATH} from "../../../bll/types";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import SidebarNavList from "./SidebarNavList";
import {SAvatar} from "../../common/Avatar/styled";

const Sidebar = React.memo(() => {
    const dispatch = useAppDispatch()
    const account = useAppSelector(state => state.auth.account, shallowEqual);
    const isAuth = useAppSelector(state => state.auth.isAuth);

    const history = useHistory();
    const location = useLocation();

    const [isOpened, setIsOpened] = useState<boolean>(false)

    const onClickHandler = () => {
        if (!isAuth) {
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

    const onAvatarClickHandler = () => {
        isAuth
            ? history.push(PATH.profile + '/' + account.id)
            : dispatch(authModalToggleAC(true))
    }

    return (
        <SSidebar>
            <SSidebarAvatar
                isActive={location.pathname === (PATH.profile + '/' + account.id)}
                onClick={onAvatarClickHandler}
            >
                <SAvatar size={"small"} img={defaultPhoto} />
            </SSidebarAvatar>
            <SidebarNavList
                isAuth={isAuth}
                onClick={onSidebarNavClickHandler}
            />
            <SSidebarItem
                label={isAuth ? 'LogOut' : 'LogIn'}
                onClick={onClickHandler}
                disabled={false}
            >
                <SSidebarItemIcon>
                    {isAuth ? <LogoutIcon /> : <LoginIcon />}
                </SSidebarItemIcon>
            </SSidebarItem>
            {isOpened &&
                <Modal type={"default"} onSuccessClick={logoutHandler} isOpened={isOpened} setIsOpened={setIsOpened} />}
        </SSidebar>
    );
});

export default Sidebar;

