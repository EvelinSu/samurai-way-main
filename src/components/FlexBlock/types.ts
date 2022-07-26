import {Property} from "csstype";

export type TFlexBlockProps = {
    flexDirection?: Property.FlexDirection,
    alignItems?: Property.AlignItems,
    justifyContent?: Property.JustifyContent,
    gap?: string | number,
    margin?: Property.Margin,
    padding?: Property.Padding,
    backgroundColor?: Property.BackgroundColor,
    maxWidth?: Property.MaxWidth,
    width?: string | number,
    color?: Property.Color,
    height?: Property.Height,
    opacity?: Property.Opacity,
    overflow?: Property.OverflowY | Property.OverflowX,
    flexWrap?: Property.FlexWrap,
    flexGrow?: Property.FlexGrow,
}