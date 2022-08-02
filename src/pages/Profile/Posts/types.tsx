export type TPosts = {}

export type TPost = {
    id: string,
    text: string,
    likes: number,
    isLiked: boolean,
    date: Date,
}

export type TPostProps = {
    key: string,
    text: string,
    likes: number,
    isLiked: boolean
    date: Date,
}

export type TSPostPanelProps = {
    likes: number,
}
