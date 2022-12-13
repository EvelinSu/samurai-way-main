import React, {FC} from 'react';
import styled from "styled-components";
import {Property} from "csstype";

type TScrollBoxProps = {
    gap?: Property.Gap | number
    padding?: Property.Padding | number
    overflowX?: Property.OverflowX
    children?: React.ReactNode
}

const ScrollBox: FC<TScrollBoxProps> = ({children, ...props}) => {
    return (
        <SScrollBoxWrapper>
            <SScrollBox gap={props.gap} padding={props.padding} overflowX={props.overflowX}>
                {children}
            </SScrollBox>
        </SScrollBoxWrapper>
    );
};

export default ScrollBox;

export const SScrollBoxWrapper = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
}))

export const SScrollBox = styled.div<Omit<TScrollBoxProps, "children">>((props) => ({
    display: "flex",
    flexDirection: "column",
    gap: props.gap || 20,
    padding: props.padding,
    minHeight: "fit-content",
    overflowX: props.overflowX
}))