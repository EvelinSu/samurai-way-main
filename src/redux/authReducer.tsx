import {TActions} from "./types";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type TAuth = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

const initialState: TAuth = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: TAuth = initialState, action: TActions): TAuth => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: TAuth) => ({
    type: "SET-USER-DATA",
    data
} as const)

export const getAuthThunk = () => (dispatch: Dispatch) => {
    authAPI.getMyData().then(me => {
            if (me.resultCode === 0) {
                dispatch(setAuthUserDataAC(me))
            }
        }
    )
}



export default authReducer


