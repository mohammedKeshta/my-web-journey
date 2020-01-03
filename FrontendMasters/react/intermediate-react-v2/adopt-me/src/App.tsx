import React, { lazy, Suspense } from 'react';
import './index.scss';
import { Router } from '@reach/router';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const Details = lazy(() => import('./components/Details'));
const SearchParams = lazy(() => import('./components/SearchParams'));

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
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
      </React.StrictMode>
    </Provider>
  );
};

export default App;
