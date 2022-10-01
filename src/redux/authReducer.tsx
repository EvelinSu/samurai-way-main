import {TActions} from "./types";

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

export default authReducer