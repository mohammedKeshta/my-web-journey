import React from 'react';
import './App.scss';
import SearchParams from './components/SearchParams';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App section">
        <h1 className="text-center">Adopt Me</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

export default App;
