import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {setAuthUserDataAC, TAuth} from "../../redux/authReducer";
import Sidebar from "./Sidebar";
import {authAPI} from "../../api/api";

const SidebarContainer = () => {

    const auth = useSelector<TRootState, TAuth>(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        authAPI.getMyData().then(me => {
                if (me.resultCode === 0) {
                    dispatch(setAuthUserDataAC(me))
                }
            }
        )
    }, [])

    return <Sidebar myId={auth.id} isAuth={auth.isAuth} />
};

export default SidebarContainer;
