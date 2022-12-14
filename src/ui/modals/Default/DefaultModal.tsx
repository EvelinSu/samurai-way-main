import React from 'react';
import {Box} from '../../common/Box/Box';
import Button from "../../common/Button/Button";
import {STitle} from '../../common/Text/STitle';
import {useTheme} from "styled-components";
import {TDefaultTheme} from "../../styles/baseTheme";

type TDefaultModalProps = {
    onSuccessClick: () => void
    onCancelClick: () => void

}
const DefaultModal: React.FC<TDefaultModalProps> = (props) => {
    const theme = useTheme() as TDefaultTheme

    return (
        <>
            <Box justifyContent={"center"}>
                <STitle fontSize={"20px"}>
                    Do you really want this?
                </STitle>
            </Box>
            <Box flexDirection={"row"} justifyContent={"center"}>
                <Button
                    size={"lg"}
                    label={'Yes'}
                    onClick={props.onSuccessClick}
                />
                <Button
                    size={"lg"}
                    label={'Cancel'}
                    onClick={props.onCancelClick}
                    backgroundColor={theme.colors.button.cancel}
                />
            </Box>
        </>

    );
};

export default DefaultModal;
