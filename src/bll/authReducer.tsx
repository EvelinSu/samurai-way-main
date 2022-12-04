import {TAppDispatch} from "./store/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {authAPI} from "../dal/api/authApi";
import {globalLoaderToggleAC} from "./loaderReducer";
import {setAppMessage} from "./appReducer";

export type TAuth = {
    account: {
        id: number,
        email: string,
        login: string,
    },
    isAuth: boolean
    authModalToggle?: boolean
    messages: string[]
}

const initialState: TAuth = {
    account: {
        id: 0,
        email: '',
        login: '',
    },
    isAuth: false,
    authModalToggle: false,
    messages: []
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthUserDataAC(state, action: PayloadAction<TAuth["account"]>) {
            state.account = action.payload;
            state.isAuth = true;
        },
        resetAuthUserDataAC(state) {
            state.account = initialState.account
            state.isAuth = initialState.isAuth
            state.messages = initialState.messages
        },
        authModalToggleAC(state, action: PayloadAction<boolean>) {
            state.authModalToggle = action.payload
        },
        setAuthMessages(state, action: PayloadAction<string[]>) {
            state.messages = action.payload
        }
    }
})

export const getAuthThunk = () => (dispatch: TAppDispatch) => {
    authAPI
        .getMyData()
        .then((me) => {
            if (me.data.id) {
                dispatch(setAuthUserDataAC(me.data))
                return me.data.id as number
            } else {
                throw new Error('Auth failed')
            }
        })
        .finally(() => dispatch(globalLoaderToggleAC(false)))
}

export const loginThunk = (email: string, password: string, rememberMe: boolean) => async (dispatch: TAppDispatch) => {
    await authAPI
        .login(email, password, rememberMe)
        .then((res) => {
            dispatch(setAuthMessages(res.messages))
            return res
        })
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAppMessage({severity: "success", text: "Successfully!"}))
                dispatch(getAuthThunk())
                dispatch(authModalToggleAC(false))
            } else {
                throw new Error(res.data.messages[0])
            }
        })
        .catch(() => {
            dispatch(setAppMessage({severity: "error", text: "Auth failed"}))
        })
}

export const logoutThunk = () => async (dispatch: Dispatch) => {
    authAPI
        .logout()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAppMessage({severity: "success", text: "Bye!"}))
                dispatch(resetAuthUserDataAC())
            }
        })
}

const authReducer = slice.reducer
export default authReducer

export const {setAuthUserDataAC, resetAuthUserDataAC, authModalToggleAC, setAuthMessages} = slice.actions
