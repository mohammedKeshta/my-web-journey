import React, { useState } from 'react';
import './App.scss';
import { Router, Link } from '@reach/router';
import SearchParams from './components/SearchParams';
import Details from './components/Details';
import ThemeContext from './components/ThemeContext';

const App = () => {
  const theme = useState('darkblue');

  return (
    <ThemeContext.Provider value={theme}>
      <React.StrictMode>
        <div className="App section">
          <Link to="/">
            <h1 className="logo">Adopt Me</h1>
          </Link>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    </ThemeContext.Provider>
  );
};

export default App;
