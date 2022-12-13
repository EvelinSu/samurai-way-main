import {TAppDispatch} from "./store/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {authAPI} from "../dal/api/authApi";
import {globalLoaderToggleAC} from "./loaderReducer";
import {setAppMessage} from "./appReducer";
import {TAccountDataResponse} from "../dal/api/types";

export const getAuthThunk = () => (dispatch: TAppDispatch) => {
    authAPI
        .getAccountData()
        .then((account) => {
            if (account.data.id) {
                dispatch(setAuthUserDataAC(account.data))
                return account.data.id as number
            } else {
                throw new Error(account.messages[0])
            }
        })
        .catch((res) => {
            dispatch(setAuthMessages(res.messages))
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
                throw new Error(res.messages[0])
            }
        })
        .catch((err) => {
            dispatch(setAppMessage({severity: "error", text: `${err}`}))
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

const initialAccountState = {
    id: 0,
    email: '',
    login: '',
}

const slice = createSlice({
    name: "auth",
    initialState: {
        account: initialAccountState,
        isAuth: false,
        authModalToggle: false,
        messages: []
    } as TAuthState,
    reducers: {
        setAuthUserDataAC(state, action: PayloadAction<TAuthState["account"]>) {
            state.account = action.payload;
            state.isAuth = true;
        },
        resetAuthUserDataAC(state) {
            state.account = initialAccountState
            state.isAuth = false
            state.messages = []
        },
        authModalToggleAC(state, action: PayloadAction<boolean>) {
            state.authModalToggle = action.payload
        },
        setAuthMessages(state, action: PayloadAction<string[]>) {
            state.messages = action.payload
        }
    }
})

type TAuthState = {
    account: TAccountDataResponse,
    isAuth: boolean
    authModalToggle?: boolean
    messages: string[]
}

const authReducer = slice.reducer
export default authReducer

export const {setAuthUserDataAC, resetAuthUserDataAC, authModalToggleAC, setAuthMessages} = slice.actions
