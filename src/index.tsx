import React from 'react';
import './ui/styles/index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./bll/store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

