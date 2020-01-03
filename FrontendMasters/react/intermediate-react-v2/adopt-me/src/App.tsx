import React, { useState, lazy, Suspense } from 'react';
import './index.scss';
import { Router } from '@reach/router';
import ThemeContext from './components/ThemeContext';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

const Details = lazy(() => import('./components/Details'));
const SearchParams = lazy(() => import('./components/SearchParams'));

const App = () => {
  const theme = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div className="App section">
          <Header />
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading Router ...</h1>}>
              <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
              </Router>
            </Suspense>
          </ErrorBoundary>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
