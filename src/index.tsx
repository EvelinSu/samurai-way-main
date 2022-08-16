import React from 'react';
import './styles/index.css';
import {rerenderEntireTree} from "./render";
import {state} from "./redux/state";


rerenderEntireTree(state)

