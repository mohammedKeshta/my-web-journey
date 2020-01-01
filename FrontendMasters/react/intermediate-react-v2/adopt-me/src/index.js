import React from 'react';
import { hydrate } from 'react-dom';
import dotenv from 'dotenv';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

dotenv.config();

hydrate(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
