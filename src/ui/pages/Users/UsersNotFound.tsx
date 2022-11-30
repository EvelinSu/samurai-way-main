import React from 'react';
import {Box} from "../../common/Box/Box";
import { SText } from '../../common/Text/SText';

const UsersNotFound = () => {
    return (
        <Box opacity={0.3} height={"100%"} alignItems={"center"} justifyContent={"center"}>
            <SText fontSize={"18px"}>No users found</SText>
        </Box>
    );
};

export default UsersNotFound;
