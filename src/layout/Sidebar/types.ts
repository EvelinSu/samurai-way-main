import {Property} from "csstype";

export type TSidebarProps = {}
export type TSSidebarProps = {}

export type TSSidebarItemProps = {
    margin?: Property.Margin,
    label?: string,
    onClick?: () => void,
    isActive?: boolean,
    activeTab?: string
    to?: any,
}

export type TSSidebarItemIconProps = {
    isActive?: boolean,
}

export type TNavLinks = Array<TNavLink>

export type TNavLink = {
    id: number,
    label: string,
    icon: JSX.Element,
    link?: string,
    margin?: Property.Margin,
}

