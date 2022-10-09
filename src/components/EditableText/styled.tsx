import styled from "styled-components";
import { SText } from "../Text/SText";

type TSEditableTextProps = {

}

export const SEditableText = styled(SText)<TSEditableTextProps>(() => ({
    borderRadius: 15,
    padding: "3px 10px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    "&:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
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