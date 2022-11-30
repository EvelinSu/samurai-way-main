import React from 'react';
import AuthModal from "./Auth/AuthModal";
import {MegaShadow} from "../common/MegaShadow/MegaShadow";
import {SModalWrapper} from "./styled";
import DefaultModal from "./Default/DefaultModal";
import {useDispatch} from "react-redux";
import {authModalToggleAC} from "../../bll/authReducer";
import {useAppSelector} from "../../common/hooks/hooks";

type TModalProps = {
    type: 'auth' | 'default'
    isOpened?: boolean
    setIsOpened?: (isOpened: boolean) => void
    onSuccessClick?: () => void
}

const Modal: React.FC<TModalProps> = (props) => {
    const dispatch = useDispatch()
    const onShadowClick = () => {
        props.setIsOpened && props.setIsOpened(!props.isOpened)
        dispatch(authModalToggleAC(false))
    }
    const isAuthModalOpen = useAppSelector(state => state.auth.authModalToggle)

    return props.isOpened || isAuthModalOpen ? (
        <MegaShadow onMouseDown={onShadowClick}>
            <SModalWrapper onMouseDown={(e) => e.stopPropagation()}>
                {props.type === 'auth' && (
                    <AuthModal />
                )}
                {props.type === 'default' && (
                    <DefaultModal
                        onCancelClick={() => props.setIsOpened && props.setIsOpened(false)}
                        onSuccessClick={() => props.onSuccessClick && props.onSuccessClick()}
                    />
                )}
            </SModalWrapper>
        </MegaShadow>
    ) : <></>
};

export default Modal;
