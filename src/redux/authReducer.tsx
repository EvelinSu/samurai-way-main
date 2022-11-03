import {TActions} from "./types";
import {authAPI} from "../api/api";
import {globalLoaderToggleAC} from "./loaderReducer";
import {TAppDispatch} from "./store";

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

export const authReducer = (state: TAuth = initialState, action: TActions): TAuth => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        case "RESET-USER-DATA":
            return {...initialState}
        case "AUTH-MODAL-OPEN-TOGGLE":
            return {...state, authModalToggle: action.isOpen}
        case "AUTH-ERROR-MESSAGES":
            return {...state, messages: action.messages}
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: TAuth) => ({
    type: "SET-USER-DATA",
    data
} as const)

export const resetAuthUserDataAC = () => ({
    type: "RESET-USER-DATA",
} as const)

export const authModalToggleAC = (isOpen: boolean) => ({
    type: "AUTH-MODAL-OPEN-TOGGLE",
    isOpen
} as const)

export const setAuthMessages = (messages: string[]) => ({
    type: "AUTH-ERROR-MESSAGES",
    messages
} as const)

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
            }
            else throw new Error(res.data.messages[0])
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


