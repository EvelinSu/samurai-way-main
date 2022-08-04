import {v1} from "uuid";
import {TPost} from "../pages/Profile/Posts/types";

type TProfilePage = {
    posts: Array<TPost>
}
type TRootState = {
    profilePage: TProfilePage
}

export const state: TRootState = {
    profilePage: {
        posts: [
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                likes: 4,
                isLiked: false,
                date: new Date(2022, 0, 32)
            },
            {
                id: v1(),
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
                likes: 2,
                isLiked: true,
                date: new Date(2021, 4, 5),
            }
        ]

    },
}
