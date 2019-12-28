import React, { useState } from 'react';
import randomColor from './utils/COLORS';

const StateComponent = () => {
  const [color, setColor] = useState('orange');

 
  return (
    <h1
      onClick={() => setColor(randomColor())}
      style={{ color: color, cursor: 'pointer' }}
    >
      useState Example
    </h1>
  );
};

export default StateComponent;
