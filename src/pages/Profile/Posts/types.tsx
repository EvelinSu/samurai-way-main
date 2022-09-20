export type TPostsProps = {
    posts: Array<TPost>
    addPost: (text: string) => void
    setNewPostText: (text: string) => void
    newPostText: string
    avatar: string
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
    avatar: string
}

export type TSPostPanelProps = {
    likes: number,
}
