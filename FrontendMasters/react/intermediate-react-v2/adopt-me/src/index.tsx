import React from 'react';
import { render } from 'react-dom';
import dotenv from 'dotenv';
import './index.scss';
import App from './App';

dotenv.config();

// hydrate(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root'));
