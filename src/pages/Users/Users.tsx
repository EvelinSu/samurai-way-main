import React from 'react';
import {SSiteContent} from "../../layout/styled";
import {Grid} from "../../components/Grid/Grid";
import {SUserBox} from "./styled";
import {TUser} from "../../redux/usersReducer";

type TUsersProps = {
    users: Array<TUser>
}

const Users: React.FC<TUsersProps> = ({users}) => {

    return (
        <SSiteContent>
            <Grid columns={"repeat(auto-fill, minmax(170px, 1fr))"}>
                {users.map(({name, id}) => (
                    <SUserBox key={id}>
                        {name}
                    </SUserBox>
                ))}
            </Grid>
        </SSiteContent>
    );
};

export default Users;
