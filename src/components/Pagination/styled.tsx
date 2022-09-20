import styled from "styled-components";
import {theme} from "../../styles/constants";

type TSPaginationProps = {
    isActive?: boolean
}

export const SPagination = styled.div<TSPaginationProps>((props) => ({
    display: "flex",
    alignItems: "center",
    gap: 15,
    padding: "10px 0",
    columnGap: 15,
    rowGap: 15,
    marginTop: "auto",
}))

export const SPaginationItem = styled.div<TSPaginationProps>((props) => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    fontSize: 12,
    minWidth: 30,
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(0.9)",
    },
    ...props.isActive && {
        backgroundColor: theme.colors.primaryDark,
        pointerEvents: "none",
    }
}))