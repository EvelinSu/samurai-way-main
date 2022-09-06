import {TActions} from "./types";

export type TUser = {
    id: string,
    avatar: string,
    direction: string,
    name: string,
    lastSeen: string,
    followers: Array<string>
}

export type TUsersPage = {
    users: Array<TUser>
}

const initialState: TUsersPage = {
    users: [
        {
            id: '1',
            name: "Kisa",
            direction: 'Ooh, yer not enduring me without a faith!',
            avatar: "https://i.imgur.com/N3ErVCc.png",
            lastSeen: 'today',
            followers: ['3', '2'],
        },
        {
            id: '2',
            name: "Kuki",
            avatar: "https://i.imgur.com/a2GuVCv.png",
            lastSeen: '2 hour ago',
            direction: 'Never love a bilge rat.',
            followers: ['3'],

        },
        {
            id: '3',
            name: "Pushok",
            avatar: "https://i.imgur.com/1Skz4Sj.png",
            lastSeen: '1 hour ago',
            direction: 'Oh, shiny jack. go to isla de muerta.',
            followers: ['1'],
        },
    ]
}

const usersReducer = (state: TUsersPage = initialState, action: TActions): TUsersPage => {
    switch (action.type) {
        case ('FOLLOW-USER'):
            return {
                ...state, users: [...state.users.map(el => el.id === action.myId
                    ? {...el, followers: [...el.followers, action.followUserId]}
                    : {...el})]
            }
        case ('UNFOLLOW-USER'):
            return {
                ...state, users: [...state.users.map(el => el.id === action.myId
                    ? {...el, followers: el.followers.filter(id => id !== action.followUserId)}
                    : el)]
            }
        case ("SET-USERS"):
            return {...state, users: action.users}
    }
    return state
}

export const followUserAC = (myId: string, followUserId: string) => ({
    type: "FOLLOW-USER",
    myId: myId,
    followUserId: followUserId
} as const)

export const unFollowUserAC = (myId: string, followUserId: string) => ({
    type: "UNFOLLOW-USER",
    myId: myId,
    followUserId: followUserId,
} as const)

export const setUsersAC = (users: Array<TUser>) => ({
    type: "SET-USERS",
    users: users
} as const)

export default usersReducer