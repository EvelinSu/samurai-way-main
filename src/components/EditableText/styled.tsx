import styled from "styled-components";
import { SText } from "../Text/SText";
import {theme} from "../../styles/constants";

type TSEditableTextProps = {
    isError: boolean
}

export const SEditableText = styled(SText)<TSEditableTextProps>((props) => ({
    borderRadius: 15,
    padding: "4px 10px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        cursor: "text",
    },
    ...props.isError && {
        outline: `1px solid ${theme.colors.status.error}`,
    }

}))

// export const SEditableTextInput = styled(SInput)(() => ({
//     borderRadius: 15,
//     padding: "3px 10px",
//     cursor: "pointer",
//     "&:hover": {
//         backgroundColor: "rgba(255, 255, 255, 0.2)",
//     }
// }))