import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";
import {loaderReducer} from "./loaderReducer";
import thunk, {ThunkDispatch} from "redux-thunk"
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    posts: postsReducer,
    auth: authReducer,
    loader: loaderReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type TAppDispatch = ThunkDispatch<TRootState, undefined, AnyAction>;

export type TRootState = ReturnType<typeof store.getState>
export type TReduxStore = typeof store

export default store