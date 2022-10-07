import React from 'react';
import AuthModal from "./Auth/AuthModal";
import {MegaShadow} from "../MegaShadow/MegaShadow";
import {SModalWrapper} from "./styled";
import DefaultModal from "./Default/DefaultModal";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";
import {authModalToggleAC} from "../../redux/authReducer";

type TModalProps = {
    type: 'auth' | 'default'
    isOpened?: boolean
    setIsOpened?: (isOpened: boolean) => void
}

const Modal: React.FC<TModalProps> = (props) => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        props.setIsOpened && props.setIsOpened(!props.isOpened)
        dispatch(authModalToggleAC(false))
    }
    const isOpen = useSelector<TRootState, boolean | undefined>(state => state.auth.authModalToggle)
    return props.isOpened || isOpen ? (
        <MegaShadow onMouseDown={onClickHandler}>
            <SModalWrapper onMouseDown={(e) => e.stopPropagation()}>
                {props.type === 'auth' && <AuthModal />}
                {props.type === 'default' && <DefaultModal close={()=> props.setIsOpened && props.setIsOpened(false)}/>}
            </SModalWrapper>
        </MegaShadow>
    ) : <></>
};

export default Modal;
