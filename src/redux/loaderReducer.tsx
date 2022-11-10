import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TLoader = {
    globalLoading: boolean
}
export const initialState: TLoader = {
    globalLoading: true
}

const slice = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: {
        globalLoaderToggleAC(state, action: PayloadAction<boolean>) {
            state.globalLoading = action.payload
        }
    }
})

export const {globalLoaderToggleAC} = slice.actions

const loaderReducer = slice.reducer

export default loaderReducer