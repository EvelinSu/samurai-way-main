import React, {useEffect} from 'react';
import {SSiteContainer, SSiteWrapper} from "./ui/layout/styled";
import {HashRouter} from "react-router-dom";
import Sidebar from "./ui/layout/Sidebar/Sidebar";
import {getAuthThunk} from "./bll/authReducer";
import GlobalLoader from "./ui/common/GlobalLoader/GlobalLoader";
import Modal from "./ui/modals/Modal";
import {useAppDispatch, useAppSelector} from "./common/hooks";
import {Routes} from "./ui/routes/Routes";
import Notification from "./ui/common/Notification/Notification";

const App = () => {

    const dispatch = useAppDispatch()
    const authModalToggle = useAppSelector(state => state.auth.authModalToggle)
    const loader = useAppSelector(state => state.loader)

    useEffect(() => {
        dispatch(getAuthThunk())
    }, [])

    return (
        <HashRouter>
            {loader.globalLoading
                ? <GlobalLoader />
                : <SSiteWrapper>
                    <Sidebar />
                    <SSiteContainer>
                        <Routes />
                    </SSiteContainer>
                    <Notification />
                    <Modal type={"auth"} isOpened={authModalToggle} />
                </SSiteWrapper>
            }
        </HashRouter>
    );
}

export default App;
