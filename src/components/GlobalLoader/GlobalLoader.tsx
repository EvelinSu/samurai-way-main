import React from 'react';
import LoaderIcon from "../../assets/loaders/loader";
import {SGlobalLoader} from "./styled";

const GlobalLoader = () => {
    return (
        <SGlobalLoader>
            <LoaderIcon />
        </SGlobalLoader>
    )
};

export default GlobalLoader;
