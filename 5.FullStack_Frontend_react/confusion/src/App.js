import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </div>
);

export default App;
