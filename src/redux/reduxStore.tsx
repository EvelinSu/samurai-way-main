import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store = createStore(rootReducer)

export type TRootState = ReturnType<typeof store.getState>
export type TReduxStore = typeof store

export default store