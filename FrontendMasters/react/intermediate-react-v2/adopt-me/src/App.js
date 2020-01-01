import React, { useState } from 'react';
import './index.scss';
import { Router } from '@reach/router';
import SearchParams from './components/SearchParams';
import Details from './components/Details';
import ThemeContext from './components/ThemeContext';
import Header from './components/Header';

const App = () => {
  const theme = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="App section">
          <Header />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
