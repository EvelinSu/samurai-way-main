import React from 'react';
import AuthModal from "./Auth/AuthModal";
import {MegaShadow} from "../MegaShadow/MegaShadow";
import {SModalWrapper} from "./styled";
import DefaultModal from "./Default/DefaultModal";

type TModalProps = {
    type: 'auth' | 'default'
    isOpened: boolean
    setIsOpened: (isOpened: boolean) => void
}

const Modal: React.FC<TModalProps> = (props) => {
    const onClickHandler = () => {
        props.setIsOpened(!props.isOpened)
    }

    return props.isOpened ? (
        <MegaShadow onMouseDown={onClickHandler}>
            <SModalWrapper onMouseDown={(e) => e.stopPropagation()}>
                {props.type === 'auth' && <AuthModal />}
                {props.type === 'default' && <DefaultModal close={()=> props.setIsOpened(false)}/>}
            </SModalWrapper>
        </MegaShadow>
    ) : <></>
};

export default Modal;
