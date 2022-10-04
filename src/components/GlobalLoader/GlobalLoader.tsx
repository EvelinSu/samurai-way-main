import React from 'react';
import LoaderIcon from "../../assets/loaders/loader";
import {SGlobalLoader} from "./styled";
import {useSelector} from "react-redux";
import {TRootState} from "../../redux/reduxStore";

const GlobalLoader = () => {
    const isLoading = useSelector<TRootState, boolean>(state => state.loader.globalLoading)
    return isLoading ? (
        <SGlobalLoader>
            <LoaderIcon/>
        </SGlobalLoader>
    ) : <></>;
};

export default GlobalLoader;
