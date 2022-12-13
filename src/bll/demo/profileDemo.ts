import {v1} from "uuid";
import {TActiveProfileResponse} from "../../dal/api/types";

export const defaultProfile: TActiveProfileResponse = {
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        youtube: "",
        github: "",
        instagram: "",
        mainLink: ""
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
        small: "",
        large: ""
    },
    aboutMe: "",
}

export const demoProfile = {
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0s&ab_channel=RickAstley",
        github: "https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord",
        instagram: "https://i.imgur.com/2eVNhUN.png",
        mainLink: ""
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'I\'m a demo cat! If you see me, you are not authorized',
    fullName: "Meow",
    userId: 0,
    photos: {
        small: "https://i.imgur.com/WfSK9QM.png",
        large: "https://i.imgur.com/WfSK9QM.png"
    }
}

export const demoPosts = [
    {
        id: v1(),
        text: "Rinse three oz of blueberries in one container of gravy. ",
        likes: 1,
        isLiked: false,
        date: 'recently',
    },
    {
        id: v1(),
        text: "Arg! Pieces o' beauty are forever golden. Scurvy, jolly skiffs awkwardly pull a " +
            "small, lively lagoon. The lad drinks with fortune, mark the seychelles until it waves. ",
        likes: 2,
        isLiked: true,
        date: '1 hour ago'
    },
    {
        id: v1(),
        text: "The gibbet breaks with desolation, taste the brig before it laughs. Reefs hobble " +
            "from malarias like undead lasses. Arrr! Pieces o' strength are forever sunny. Cannibals " +
            "travel on passion at prison! The lagoon stutters beauty like a warm sea.",
        likes: 124125,
        isLiked: true,
        date: 'August 4'
    }
]