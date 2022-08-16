import {TPost} from "./Posts/types";

export type TProfileProps = {
    posts: Array<TPost>
    addPost: (text: string) => void
}