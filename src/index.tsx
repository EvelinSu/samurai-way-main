import React from 'react';
import './styles/index.css';
import ReactDOM from "react-dom";
import store from "./redux/reduxStore";
import App from "./App";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

