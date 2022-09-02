import styled from "styled-components";


type TSTitleProps = {
    color?: string
}
export const STitle = styled.span<TSTitleProps>((props) => ({
    fontWeight: "bold",
    fontSize: 18,
    color: props.color
}))