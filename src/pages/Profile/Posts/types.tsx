export type TPostsProps = {
    posts: Array<TPost>
    addPost: (text: string) => void
}

export type TPost = {
    id: string,
    text: string,
    likes: number,
    isLiked: boolean,
    date: string,
}

export type TPostProps = {
    key: string,
    text: string,
    likes: number,
    isLiked: boolean
    date: string,
}

export type TSPostPanelProps = {
    likes: number,
}
