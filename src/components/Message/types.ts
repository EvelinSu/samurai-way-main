export type TMessageProps = {
    id?: number,
    key?: number,
    text: string,
    time: string,
    me?: boolean,
    name?: string,
    avatar?: string,
}

export type TSMessageTextProps = {
    opacity?: number,
}
export type TSMessageProps = {
    isMine?: boolean,
}

export type TSMessageContainerProps = {
    isMine?: boolean,

}