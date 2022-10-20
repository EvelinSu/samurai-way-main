import React, {FC} from 'react';
import styled from "styled-components";

type TScrollBoxProps = {
    gap?: string | number
    padding?: string | number
}

const ScrollBox: FC<TScrollBoxProps> = ({gap, padding, children}) => {
    return (
        <SScrollBoxWrapper>
            <SScrollBox gap={gap} padding={padding}>
                {children}
            </SScrollBox>
        </SScrollBoxWrapper>
    );
};

export default ScrollBox;

export const SScrollBoxWrapper = styled.div(props => ({
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    overflowX: "hidden",
}))

type TSScrollProps = {
    gap?: string | number
    padding?: string | number
}

export const SScrollBox = styled.div<TSScrollProps>(({gap, padding}) => ({
    display: "flex",
    flexDirection: "column",
    gap: gap || 20,
    padding: padding,
    minHeight: "fit-content",
}))