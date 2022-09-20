import React, {ReactChildren} from 'react';
import { STitle } from '../components/Text/STitle';
import Input from "../components/Form/Input";
import {SPagePanel, SPagePanelTitle} from "./styled";
import {Box} from "../components/Box/Box";

type TPagePanelProps = {
    title: string
}

const PagePanel: React.FC<TPagePanelProps> = (props) => {
    return (
        <SPagePanel>
            <SPagePanelTitle>{props.title}</SPagePanelTitle>
            <Box>
                {props.children}
            </Box>
        </SPagePanel>

    );
};

export default PagePanel;
