import {Dispatch} from "redux";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {followAPI, TUser, usersAPI} from "../dal/api/usersApi";
import {setAppMessage, setIsFetching} from "./appReducer";
import {TCommonResponse} from "../dal/api/types";
import {AxiosResponse} from "axios";
import {transformToQueryParams} from "../common/transformToQueryParams";

export const getUsersThunk = createAsyncThunk(
    'user/get',
    async (params: TUsersParams, {dispatch}) => {
        dispatch(setIsFetching(true))
        try {
            const response = await usersAPI.getUsers(transformToQueryParams<TUsersParams>(params))

            dispatch(setTotalUsersCount(response.totalCount))
            dispatch(setUsers(response.items))
            params.term && dispatch(setUsersFilter(params.term))
            return response.items
        } catch {
            dispatch(setAppMessage({text: `Something went wrong`, severity: "error"}))
        } finally {
            dispatch(setIsFetching(false))
        }
    }
)

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
        dispatch(setFollowingProgress({id: id, isInProgress: false}))
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
            state.users = [...action.payload]

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
export type TUsersParams = {
    page?: string,
    friend?: boolean,
    count?: number
    term?: string
}

const usersReducer = slice.reducer

export const {
    followToggle,
    setUsers,
    setTotalUsersCount,
    setFollowingProgress,
    setUsersFilter,
    setPageSize
} = slice.actions

export default usersReducer