import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'loader',
    initialState: {
        globalLoading: true
    } as TLoaderState,
    reducers: {
        globalLoaderToggleAC(state, action: PayloadAction<boolean>) {
            state.globalLoading = action.payload
        }
    }
})

type TLoaderState = {
    globalLoading: boolean
}

export const {globalLoaderToggleAC} = slice.actions

const loaderReducer = slice.reducer

export default loaderReducer