import React from 'react';
import './styles/index.css';
import {addPost, sendMessage, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} sendMessage={sendMessage} addPost={addPost}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

