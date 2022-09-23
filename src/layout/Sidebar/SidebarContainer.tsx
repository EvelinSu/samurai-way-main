import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import axios from "axios";
import {setAuthUserDataAC, TAuth} from "../../redux/authReducer";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {

    const auth = useSelector<TRootState, TAuth>(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
             .then(response => {
                     console.log(response)
                     if (response.data.resultCode === 0) {
                         dispatch(setAuthUserDataAC(response.data.data))
                     }
                 }
             )
    }, [])

    return <Sidebar myId={auth.id} isAuth={auth.isAuth}/>
};

export default SidebarContainer;
