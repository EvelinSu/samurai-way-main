import {TActions} from "./types";

export type TUser = {
    id: string,
    avatar: string,
    description: string,
    name: string,
    lastSeen: string,
    followers: Array<string>,
    isMyFollow: boolean
}

export type TUsersPage = {
    users: Array<TUser>
}

const initialState: TUsersPage = {
    users: [
        {
            id: '1',
            name: "Kisa",
            description: 'Ooh, yer not enduring me without a faith!',
            avatar: "https://i.imgur.com/F6qPz9E.png",
            lastSeen: 'today',
            followers: ['3', '2'],
            isMyFollow: false
        },
        {
            id: '2',
            name: "Kuki",
            avatar: "https://i.imgur.com/RxAof5Q.png",
            lastSeen: '2 hour ago',
            description: 'Never love a bilge rat.',
            followers: ['3'],
            isMyFollow: false
        },
        {
            id: '3',
            name: "Bred",
            avatar: "https://i.imgur.com/S4Qr4IC.png",
            lastSeen: '1 hour ago',
            description: 'Oh, shiny jack. go to isla de muerta.',
            followers: ['1'],
            isMyFollow: true
        },
        {
            id: '4',
            name: "Maryl",
            avatar: "https://i.imgur.com/BrMe8Wb.png",
            lastSeen: '1 hour ago',
            description: 'Ah, scrawny anchor. you wont rob the bikini atoll.',
            followers: ['1, 3'],
            isMyFollow: true
        },
        {
            id: '5',
            name: "Jack",
            avatar: "https://i.imgur.com/uwfZokb.png",
            lastSeen: '1 hour ago',
            description: 'The cockroach hauls with greed, trade the brig until it grows.',
            followers: ['1'],
            isMyFollow: true
        },
    ]
}

const usersReducer = (state: TUsersPage = initialState, action: TActions): TUsersPage => {
    switch (action.type) {
        case ('FOLLOW-USER-TOGGLE'):
            return {
                ...state, users: [...state.users.map(el => el.id === action.userId
                    ? {...el, isMyFollow: action.isMyFollow}
                    : {...el}
                )]
            }
        case ("SET-USERS"):
            return {...state, users: action.users}
    }
    return state
}


export const followUserToggleAC = (userId: string, isMyFollow: boolean) => ({
    type: "FOLLOW-USER-TOGGLE",
    userId: userId,
    isMyFollow: isMyFollow
} as const)

export const setUsersAC = (users: Array<TUser>) => ({
    type: "SET-USERS",
    users: users
} as const)

export default usersReducer