import {TActions} from "./types";
import {authAPI} from "../api/api";
import {globalLoaderToggleAC} from "./loaderReducer";
import {TAppDispatch} from "./reduxStore";

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

export const getAuthThunk = () => async (dispatch: TAppDispatch) => {
    dispatch(globalLoaderToggleAC(true))
    const me = await authAPI.getMyData();
    setTimeout(() => {
        dispatch(globalLoaderToggleAC(false))
    }, 1000)

    if (!me.resultCode) {
        dispatch(setAuthUserDataAC(me.data))
        return me.data.id as number
    } else return 0

}

export default authReducer


