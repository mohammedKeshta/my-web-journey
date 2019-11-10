import React from 'react';
import './App.scss';
import SearchParams from './components/SearchParams';

const App = () => {
  return (
    <div className="App section">
      <h1 className="text-center">Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

export default App;
