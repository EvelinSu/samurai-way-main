import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import loaderReducer from "./loaderReducer";
import postsReducer from "./postsReducer";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'

const store = configureStore({
    reducer: {
        profile: profileReducer,
        dialogs: dialogsReducer,
        users: usersReducer,
        posts: postsReducer,
        auth: authReducer,
        loader: loaderReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type TAppDispatch = typeof store.dispatch;

export type TRootState = ReturnType<typeof store.getState>
export type TReduxStore = typeof store

export default store