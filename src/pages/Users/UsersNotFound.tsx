import React from 'react';
import {Box} from "../../components/Box/Box";
import { SText } from '../../components/Text/SText';

const UsersNotFound = () => {
    return (
        <Box opacity={0.3} height={"100%"} alignItems={"center"} justifyContent={"center"}>
            <SText fontSize={"18px"}>No users found</SText>
        </Box>
    );
};

export default UsersNotFound;
