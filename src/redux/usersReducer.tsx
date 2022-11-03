import {TActions} from "./types";
import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {presentationUsers} from "./demo/usersDemo";

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
    filter: {
        name: string
    }
}

const initialState: TUsersPage = {
    users: [],
    pageSize: 15,
    totalUsersCount: 15,
    isFetching: true,
    followingInProgress: [],
    filter: {
        name: ''
    }
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
            return {
                ...state,
                users: [...action.users]
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case "TOGGLE-LOADER":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "FOLLOWING-LOADER":
            if (action.isInProgress) {
                return {
                    ...state,
                    followingInProgress: [...state.followingInProgress, action.id]
                }
            } else {
                return {
                    ...state,
                    followingInProgress: state.followingInProgress.filter(id => id !== action.id)
                }
            }
        case "SET-USERS-FILTER":
            return {
                ...state,
                filter: {...state.filter, name: action.name}
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
export const setUsersFilter = (name: string) => ({
    type: "SET-USERS-FILTER",
    name
} as const)

// получить определенное число юзеров на конкретной странице
export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(usersToggleLoader(true))
    usersAPI.getUsers(currentPage, pageSize).then(response => {
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setUsers(response.items))
    })
            .catch((err) => {
                alert(`${err.message}, ......you can see demo users! but can't see their profiles....`)
                dispatch(setUsers(presentationUsers))
            })
            .finally(() => dispatch(usersToggleLoader(false)))
}
//

export const searchUsersThunk = (name: string, currentPage: string, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(usersToggleLoader(true))
    usersAPI.searchUsers(name, currentPage, pageSize).then(response => {
        dispatch(setUsersFilter(name))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setUsers(response.items))
    })
            .catch((err) => alert(err.message))
            .finally(() => dispatch(usersToggleLoader(false)))
}

export const followToggleThunk = (user: TUser) => (dispatch: Dispatch) => {
    dispatch(setFollowingProgress(user.id, true))
    if (!user.followed) {
        followAPI
            .postFollow(user.id)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followToggle(user.id))
                    dispatch(setFollowingProgress(user.id, false))
                }
            })
    } else {
        followAPI
            .unFollow(user.id)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followToggle(user.id))
                    dispatch(setFollowingProgress(user.id, false))
                }
            })
    }
}

export default usersReducer