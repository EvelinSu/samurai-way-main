import React, {FC} from "react";
import {TReduxStore} from "./redux/reduxStore";

const StoreContext = React.createContext({} as TReduxStore)

type TProvider = {
    store: TReduxStore
    children: React.ReactNode
}

export const Provider: FC<TProvider> = ({store, children}) => {
    return(
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext