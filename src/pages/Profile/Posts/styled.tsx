import styled from "styled-components";
import {theme} from "../../../styles/constants";
import {TSPostPanelProps} from "./Post/types";

export const SPost = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    gap: 20,
}))

export const SPostText = styled.div((props) => ({
    backgroundColor: theme.colors.primary,
    padding: "15px 20px",
    borderRadius: 15,
    position: "relative",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 30,
        height: 15,
        borderRight: `10px solid ${theme.colors.primary}`,
        borderBottomRightRadius: "35%",
        left: -40,
        top: 35,
        transform: "scale(1.5, -1.5) skewY(10deg) skewX(-25deg)",
    }
}))

export const SPostPanel = styled.div<TSPostPanelProps>((props) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "relative",

    svg:{
        borderRadius: "50%",
        width: 30,
        height: 30,
        padding: 5,
        cursor: "pointer",
        transition: "0.2s",
    },
    "&:hover": {
        svg:{
            transform: "scale(0.9)",
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        },
    },
    "&:after": {
        content: `'${props.likes}'`,
        position: "absolute",
        fontSize: 12,
        bottom: -15,
        opacity: 0.4,
        pointerEvents: "none",

    }
}))