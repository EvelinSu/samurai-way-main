import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";
import {loaderReducer} from "./loaderReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    loader: loaderReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type TAppDispatch = ThunkDispatch<TRootState, undefined, AnyAction>;

export type TRootState = ReturnType<typeof store.getState>
export type TReduxStore = typeof store

export default store