import React from 'react';
import './styles/index.css';
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./StoreContext";
import store from "./redux/reduxStore";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

