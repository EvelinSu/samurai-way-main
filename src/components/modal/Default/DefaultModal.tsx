import React from 'react';
import {Box} from '../../Box/Box';
import Button from "../../Button/Button";
import {theme} from "../../../styles/constants";
import { STitle } from '../../Text/STitle';

type TDefaultModalProps = {
    close: () => void
}
const DefaultModal: React.FC<TDefaultModalProps> = (props) => {
    const onClickHandler = () => {
        props.close()
    }
    return (
        <>
            <Box justifyContent={"center"}>
                <STitle fontSize={"20px"}>
                    Do you really want this?
                </STitle>
            </Box>
            <Box flexDirection={"row"} justifyContent={"center"}>
                <Button size={"lg"} label={'Yes'} onClick={onClickHandler} />
                <Button size={"lg"} label={'Cancel'} onClick={onClickHandler} backgroundColor={theme.colors.button.cancel}/>
            </Box>
        </>

    );
};

export default DefaultModal;
