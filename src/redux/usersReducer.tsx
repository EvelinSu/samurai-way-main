import {TActions} from "./types";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type TUser = {
    id: number | string,
    photos: { [Key: string]: string },
    status: string,
    name: string,
    // lastSeen: string,
    followed: boolean
}

export type TUsersPage = {
    users: Array<TUser>
    pageSize: number,
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<string | number>
}

export const presentationUsers = [
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

const initialState: TUsersPage = {
    users: [],
    pageSize: 12,
    totalUsersCount: 12,
    isFetching: true,
    followingInProgress: []
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
            // return {...state, users: [...state.users]}
            return {...state, users: [...action.users]}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.usersCount}
        case "TOGGLE-LOADER":
            return {...state, isFetching: action.isFetching}
        case "FOLLOWING-LOADER":
            if (action.isInProgress) {
                return {...state, followingInProgress: [...state.followingInProgress, action.id]}
            } else {
                return {...state, followingInProgress: state.followingInProgress.filter(id => id !== action.id)}
            }
    }
    return state
}

export const followToggle = (userId: string | number) => ({
    type: "FOLLOW-USER-TOGGLE",
    userId,
} as const)

export const setUsers = (users: Array<TUser>) => ({
    type: "SET-USERS",
    users
} as const)

export const setCurrentPage = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage
} as const)
export const setTotalUsersCount = (usersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    usersCount
} as const)
export const usersToggleLoader = (isFetching: boolean) => ({
    type: "TOGGLE-LOADER",
    isFetching
} as const)
export const setFollowingProgress = (id: string | number, isInProgress: boolean) => ({
    type: "FOLLOWING-LOADER",
    isInProgress,
    id
} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(usersToggleLoader(true))
    usersAPI.getUsers(currentPage, pageSize).then(response => {
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        setTimeout(() => {
            dispatch(usersToggleLoader(false))
        }, 500)
    }).catch(() => { // показать презентационных пользователей если с сервера не придет ответ
        dispatch(setUsers(presentationUsers))
        dispatch(setTotalUsersCount(presentationUsers.length))
        setTimeout(() => {
            dispatch(usersToggleLoader(false))
        }, 500)
    })
}

export default usersReducer