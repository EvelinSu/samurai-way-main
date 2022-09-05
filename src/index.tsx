import React from 'react';
import './styles/index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

