import styled from "styled-components";
import {Box} from "../Box/Box";

type TGridProps = {
    columns?: string,
    rows?: string,
}

export const Grid = styled(Box)<TGridProps>((props) => ({
    display: "grid",
    gridTemplateColumns: props.columns,
    gridTemplateRows: props.rows,

}))