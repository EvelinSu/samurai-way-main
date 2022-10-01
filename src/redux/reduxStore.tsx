import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type TRootState = ReturnType<typeof store.getState>
export type TReduxStore = typeof store

export default store