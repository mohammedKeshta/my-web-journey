import React from 'react';
import './App.scss';
import Pet from './components/Pet';

const App = () => {
  return React.createElement(
    'div',
    { className: 'App section' },
    React.createElement('h1', null, 'Adopt Me'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel'
    }),
    React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Mixed' })
  );
};

export default App;
