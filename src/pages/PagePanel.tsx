import React from 'react';
import {SPagePanel, SPagePanelTitle} from "./styled";
import {Box} from "../components/Box/Box";

type TPagePanelProps = {
    title: string
    children?: React.ReactNode
}

const PagePanel: React.FC<TPagePanelProps> = React.memo((props) => {
    return (
        <SPagePanel>
            <SPagePanelTitle>{props.title}</SPagePanelTitle>
            <Box>
                {props.children}
            </Box>
        </SPagePanel>

    );
});

export default PagePanel;
