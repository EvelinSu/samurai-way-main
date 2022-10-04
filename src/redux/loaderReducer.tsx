import {TActions} from "./types";

export type TLoader = {
    globalLoading: boolean
}
export const initialState: TLoader = {
    globalLoading: true
}

export const loaderReducer = (state: TLoader = initialState, action: TActions): TLoader => {
    switch (action.type) {
        case "LOADER-TOGGLE":
            return {...state, globalLoading: action.globalLoading}
        default:
            return state
    }
}

export const globalLoaderToggleAC = (globalLoading: boolean) => ({
    type: "LOADER-TOGGLE",
    globalLoading
} as const)


export default loaderReducer