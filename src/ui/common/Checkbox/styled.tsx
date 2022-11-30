import styled from "styled-components";

export const SLabel = styled.label(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "inherit"
}))

export const SCheckbox = styled.input((props) => ({
    appearance: "none",
    padding: 10,
    width: 20,
    height: 20,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    marginRight: 10,
    position: "relative",
    cursor: "pointer",
    "&:checked": {
        appearance: "none",
        height: 0,
        width: 0,
        "&:after": {
            content: `''`,
            backgroundColor: "rgba(255,255,255,0.65)",
            position: "absolute",
            top: 6,
            bottom: 6,
            left: 6,
            right: 6,
            borderRadius: "50%",
        }
    }
}))