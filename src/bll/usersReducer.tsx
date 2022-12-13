import {Dispatch} from "redux";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {followAPI, TUser, usersAPI} from "../dal/api/usersApi";
import {setAppMessage} from "./appReducer";
import {TCommonResponse} from "../dal/api/types";
import {AxiosResponse} from "axios";

export const getUsersThunk = createAsyncThunk(
    'user/get',
    async ({currentPage, pageSize}: { currentPage: number, pageSize: number }, {dispatch}) => {
        try {
            return await usersAPI.getUsers(currentPage, pageSize)
        } catch (err) {
            dispatch(setAppMessage({text: `${err}`, severity: "error"}))
        }
    }
)

export const searchUsersThunk = (name: string, currentPage: string, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(usersToggleLoader(true))
    try {
        const response = await usersAPI.searchUsers(name, currentPage, pageSize)
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setUsersFilter(name))
        dispatch(setUsers(response.items))
    } catch {
        dispatch(setAppMessage({text: `Something went wrong`, severity: "error"}))
    } finally {
        dispatch(usersToggleLoader(false))
    }
}

export const followToggleThunk = (id: number, followed: boolean) => async (dispatch: Dispatch) => {
    dispatch(setFollowingProgress({id: id, isInProgress: true}))
    try {
        let response: AxiosResponse<TCommonResponse>;
        if (!followed) {
            response = await followAPI.postFollow(id)
        } else {
            response = await followAPI.unFollow(id)
        }
        if (response.data.resultCode === 0) {
            dispatch(followToggle(id))
            dispatch(setFollowingProgress({id: id, isInProgress: false}))
        } else {
            throw new Error(response.data.messages[0])
        }
    } catch (err) {
        dispatch(setAppMessage({text: `${err}`, severity: "error"}))
    }
}

const slice = createSlice({
    name: "users",
    initialState: {
        users: [],
        pageSize: 15,
        totalUsersCount: 15,
        isFetching: true,
        followingInProgress: [],
        filter: {
            name: ''
        }
    } as TUsersState,
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
            state.totalUsersCount = action.payload
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
    },
    extraReducers: {
        [getUsersThunk.pending.type]: (state) => {
            state.isFetching = true
        },
        [getUsersThunk.fulfilled.type]: (state, action) => {
            state.isFetching = false
            state.totalUsersCount = action.payload.totalCount
            state.users = action.payload.items
        },
        [getUsersThunk.rejected.type]: (state) => {
            state.isFetching = false
        }
    }
})

export type TUsersState = {
    users: Array<TUser>
    pageSize: number,
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
    filter: {
        name: string
    }
}

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

export default usersReducer