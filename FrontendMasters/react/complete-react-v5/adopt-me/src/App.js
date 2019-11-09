import React from 'react';
import './App.scss';
import Pet from './components/Pet';

const App = () => {
  return (
    <div className="App section">
      <h1 className="text-center">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

export default App;
