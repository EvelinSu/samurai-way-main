import React, {FC} from 'react';
import styled from "styled-components";
import {Property} from "csstype";

type TScrollBoxProps = {
    gap?: string | number
    padding?: string | number
    overflowX?: Property.OverflowX
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

type TSScrollProps = {
    gap?: string | number
    padding?: string | number
    overflowX?: Property.OverflowX
}
export const SScrollBox = styled.div<TSScrollProps>(({gap, padding, overflowX}) => ({
    display: "flex",
    flexDirection: "column",
    gap: gap || 20,
    padding: padding,
    minHeight: "fit-content",
    overflowX: overflowX
}))