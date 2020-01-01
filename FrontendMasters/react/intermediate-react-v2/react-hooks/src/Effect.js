import React, { useState, useEffect } from 'react';

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 60000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <h1>
      useEffect Example: <br />
      <span>{time.toLocaleTimeString()}</span>
    </h1>
  );
};

export default EffectComponent;
