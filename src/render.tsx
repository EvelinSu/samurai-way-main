import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, sendMessage, TRootState} from "./redux/state";

export let rerenderEntireTree = (state: TRootState) => {
    ReactDOM.render(
        <App state={state} sendMessage={sendMessage} addPost={addPost}/>,
        document.getElementById('root')
    );
}


