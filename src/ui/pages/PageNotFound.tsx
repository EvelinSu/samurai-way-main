import React from 'react';
import {SSiteContent} from "../layout/styled";
import {Box} from "../common/Box/Box";
import {SText} from "../common/Text/SText";

const PageNotFound = () => {
    return (
        <SSiteContent>
            <Box alignItems={"center"} justifyContent={"center"} flexGrow={1}>
                <SText fontSize={"44px"} fontWeight={"bold"}>
                    Page not found
                </SText>
            </Box>
        </SSiteContent>
    );
};

export default PageNotFound;
