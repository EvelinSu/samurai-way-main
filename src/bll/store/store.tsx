import profileReducer from "../profileReducer";
import dialogsReducer from "../dialogsReducer";
import authReducer from "../authReducer";
import loaderReducer from "../loaderReducer";
import postsReducer from "../postsReducer";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import usersReducer from "../usersReducer";
import {appReducer} from "../appReducer";

const store = configureStore({
    reducer: {
        users: usersReducer,
        profile: profileReducer,
        dialogs: dialogsReducer,
        posts: postsReducer,
        auth: authReducer,
        app: appReducer,
        loader: loaderReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type TAppDispatch = typeof store.dispatch;

export type TRootState = ReturnType<typeof store.getState>
export type TReduxStore = typeof store

export default store