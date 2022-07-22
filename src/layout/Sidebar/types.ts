import {Property} from "csstype";

export type TSidebarProps = {}
export type TSSidebarProps = {}

export type TSSidebarItemProps = {
    margin?: Property.Margin,
    label?: string,
    onClick?: () => void,
    isActive?: boolean,
}

export type TSSidebarItemIconProps = {
    isActive?: boolean,
}

export type TNavLinks = Array<TNavLink>

export type TNavLink = {
    id: number,
    label: string,
    icon: JSX.Element,
    margin?: Property.Margin,
}

