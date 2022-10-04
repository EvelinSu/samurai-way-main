import {TActions} from "./types";
import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
    pageSize: number,
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
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
        id: 12,
        name: "Anon",
        photos: {
            small: '',
            large: ''
        },
        status: '',
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
        id: 13,
        name: "NewUser",
        photos: {
            small: '',
            large: ''
        },
        status: '',
        followed: false
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
    pageSize: 15,
    totalUsersCount: 15,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: TUsersPage = initialState, action: TActions): TUsersPage => {
    switch (action.type) {
        case ('FOLLOW-USER-TOGGLE'):
            return {
                ...state, users: [...state.users.map(el => el.id === action.userId
                    ? {...el, followed: !el.followed}
                    : {...el}
                )]
            }
        case ("SET-USERS"):
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

export const followToggle = (userId: number) => ({
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
export const setFollowingProgress = (id: number, isInProgress: boolean) => ({
    type: "FOLLOWING-LOADER",
    isInProgress,
    id
} as const)

// получить определенное число юзеров на конкретной странице
export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(usersToggleLoader(true))
    usersAPI.getUsers(currentPage, pageSize).then(response => {
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setUsers(response.items))
        setTimeout(() => {
            dispatch(usersToggleLoader(false))
        }, 500)
    })
}
//

export const searchUsersThunk = (name: string, currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(usersToggleLoader(true))
    usersAPI.searchUsers(name, currentPage, pageSize).then(response => {
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setUsers(response.items))
        setTimeout(() => {
            dispatch(usersToggleLoader(false))
        }, 500)
    })

}

export const followToggleThunk = (user: TUser) => (dispatch: Dispatch) => {
    dispatch(setFollowingProgress(user.id, true))
    if (!user.followed) {
        followAPI.postFollow(user.id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followToggle(user.id))
                dispatch(setFollowingProgress(user.id, false))
            }
        })
    } else {
        followAPI.unFollow(user.id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followToggle(user.id))
                dispatch(setFollowingProgress(user.id, false))
            }
        })
    }
}

export default usersReducer