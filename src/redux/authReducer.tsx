import {TActions} from "./types";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {globalLoaderToggleAC} from "./loaderReducer";

export type TAuth = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
    authModalToggle?: boolean
}

const initialState: TAuth = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    authModalToggle: false
}

export const authReducer = (state: TAuth = initialState, action: TActions): TAuth => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        case "AUTH-MODAL-OPEN-TOGGLE":
            return {...state, authModalToggle: action.isOpen}
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: TAuth) => ({
    type: "SET-USER-DATA",
    data
} as const)

export const authModalToggleAC = (isOpen: boolean) => ({
    type: "AUTH-MODAL-OPEN-TOGGLE",
    isOpen
} as const)

export const getAuthThunk = () => (dispatch: Dispatch) => {
    dispatch(globalLoaderToggleAC(true))
    authAPI.getMyData().then(me => {
            if (me.resultCode === 0) {
                dispatch(setAuthUserDataAC(me.data))
            }
            setTimeout(() => {
                dispatch(globalLoaderToggleAC(false))
            }, 1000)
        }
    )
}

export default authReducer


