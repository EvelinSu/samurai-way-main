import {TActions} from "./types";
import axios, {AxiosResponse} from "axios";

export type TUser = {
    id: number,
    photos: { [Key: string]: string },
    status: string,
    name: string,
    // lastSeen: string,
    followed: boolean
}

export type TUsersPage = {
    users: Array<TUser>
}

const initialState: TUsersPage = {

    users: [
        {
            id: 1,
            name: "Kisa",
            status: 'Ooh, yer not enduring me without a faith!',
            photos: {
                small: "https://i.imgur.com/F6qPz9E.png",
                large: "https://i.imgur.com/F6qPz9E.png"
            },
            followed: false
        },
        {
            id: 2,
            name: "Kuki",
            photos: {
                small: "https://i.imgur.com/RxAof5Q.png",
                large: "https://i.imgur.com/RxAof5Q.png"
            },
            status: 'Never love a bilge rat.',
            followed: false
        },
        {
            id: 3,
            name: "Bred",
            photos: {
                small: "https://i.imgur.com/S4Qr4IC.png",
                large: "https://i.imgur.com/S4Qr4IC.png"
            },
            status: 'Oh, shiny jack. go to isla de muerta.',
            followed: true
        },
        {
            id: 4,
            name: "Maryl",
            photos: {
                small: "https://i.imgur.com/BrMe8Wb.png",
                large: "https://i.imgur.com/BrMe8Wb.png"
            },
            status: 'Ah, scrawny anchor. you wont rob the bikini atoll.',
            followed: true
        },
        {
            id: 5,
            name: "Jack",
            photos: {
                small: "https://i.imgur.com/uwfZokb.png",
                large: "https://i.imgur.com/uwfZokb.png"
            },
            status: 'The cockroach hauls with greed, trade the brig until it grows.',
            followed: true
        },
    ]
}

const usersReducer = (state: TUsersPage = initialState, action: TActions): TUsersPage => {
    switch (action.type) {
        case ('FOLLOW-USER-TOGGLE'):
            return {
                ...state, users: [...state.users.map(el => String(el.id) === action.userId
                    ? {...el, followed: !el.followed}
                    : {...el}
                )]
            }
        case ("SET-USERS"):
            return {...state, users: [...state.users, ...action.users]}
    }
    return state
}

export const followUserToggleAC = (userId: string) => ({
    type: "FOLLOW-USER-TOGGLE",
    userId: userId,
} as const)

export const setUsersAC = (users: Array<TUser>) => ({
    type: "SET-USERS",
    users: users
} as const)

export default usersReducer