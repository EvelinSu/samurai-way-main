import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {presentationUsers} from "./demo/usersDemo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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

const slice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        followToggle(state, action: PayloadAction<number>) {
            state.users = state.users.map(el => el.id === action.payload
                ? {...el, followed: !el.followed}
                : {...el}
            )
        },
        setUsers(state, action: PayloadAction<TUser[]>) {
            state.users = action.payload
        },
        setTotalUsersCount(state, action: PayloadAction<number>) {
            return {...state,totalUsersCount: action.payload}
        },
        usersToggleLoader(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload
        },
        setFollowingProgress(state, action: PayloadAction<{ id: number, isInProgress: boolean }>) {
            action.payload.isInProgress
                ? state.followingInProgress.push(action.payload.id)
                : state.followingInProgress = state.followingInProgress.filter(id => id !== action.payload.id)
        },
        setUsersFilter(state, action: PayloadAction<string>) {
            state.filter.name = action.payload
        },
        setPageSize(state, action: PayloadAction<number>) {
            state.pageSize = action.payload
        }
    }

})

const usersReducer = slice.reducer

export const {
    followToggle,
    setUsers,
    setTotalUsersCount,
    usersToggleLoader,
    setFollowingProgress,
    setUsersFilter,
    setPageSize
} = slice.actions

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
    dispatch(setFollowingProgress({id: user.id, isInProgress: true}))
    if (!user.followed) {
        followAPI
            .postFollow(user.id)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followToggle(user.id))
                    dispatch(setFollowingProgress({id: user.id, isInProgress: false}))
                }
            })
    } else {
        followAPI
            .unFollow(user.id)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(followToggle(user.id))
                    dispatch(setFollowingProgress({id: user.id, isInProgress: false}))
                }
            })
    }
}

export default usersReducer