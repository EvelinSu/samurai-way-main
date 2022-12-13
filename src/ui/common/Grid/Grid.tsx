import styled from "styled-components";
import {Box} from "../Box/Box";
import {Property} from "csstype";

type TGridProps = {
    columns: Property.GridTemplateColumns,
    rows: Property.GridTemplateRows,
    gap: Property.Gap | number
}

export const Grid = styled(Box)<Partial<TGridProps>>((props) => ({
    display: "grid",
    gridTemplateColumns: props.columns,
    gridTemplateRows: props.rows,
    gap: props.gap || 20,
    rowGap: props.gap || 20,
    columnGap: props.gap || 20,

}))