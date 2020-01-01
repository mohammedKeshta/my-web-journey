import React, { useContext } from 'react';

const colors = {
  blue: '#03619c',
  yellow: '#8c8f03',
  red: '#9c0312'
};

const ColorContext = React.createContext(colors);

const MyComponent = () => {
  const colors = useContext(ColorContext);
  return (
    <div>
      <h1 style={{ color: colors.yellow }}>My Compoennt</h1>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      {' '}
      <MyComponent />
    </div>
  );
};
const ContextAlligator = () => {
  return (
    <ColorContext.Provider value={colors}>
      <Home />;
    </ColorContext.Provider>
  );
};

export default ContextAlligator;
