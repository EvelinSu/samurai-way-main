import {authAPI} from "../api/api";
import {globalLoaderToggleAC} from "./loaderReducer";
import {TAppDispatch} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TAuth = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
    authModalToggle?: boolean
    messages: string[]
}

const initialState: TAuth = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    authModalToggle: false,
    messages: []
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthUserDataAC(state, action: PayloadAction<TAuth>) {
            return {...state, ...action.payload, isAuth: true}
        },
        resetAuthUserDataAC() {
            return initialState
        },
        authModalToggleAC(state, action: PayloadAction<boolean>) {
           state.authModalToggle = action.payload
        },
        setAuthMessages(state, action: PayloadAction<string[]>) {
            state.messages = action.payload
        }
    }
})

const authReducer = slice.reducer

export const {setAuthUserDataAC, resetAuthUserDataAC, authModalToggleAC, setAuthMessages} = slice.actions

export const getAuthThunk = () => async (dispatch: TAppDispatch) => {
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
                alert("COOL, IT'S WORKS")
                dispatch(getAuthThunk())
                dispatch(authModalToggleAC(false))
            } else {
                throw new Error(res.data.messages[0])
            }
        })
        .catch((err) => {
            alert(err)
        })
}

export const logoutThunk = () => async (dispatch: TAppDispatch) => {
    authAPI
        .logout()
        .then((res) => {
            if (res.resultCode === 0) {
                alert("BYE, FRIEND!")
                dispatch(resetAuthUserDataAC())
            }
        })
}

export default authReducer


