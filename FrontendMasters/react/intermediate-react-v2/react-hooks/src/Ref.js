import React, { useState, useRef } from 'react';

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
  const inputEl = useRef(null);

  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  function onButtonClick() {
    inputEl.current.focus();
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
      <pre>
        <code>{JSON.stringify(numRef)}</code>
      </pre>
      <h3>access a child imperatively</h3>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default RefComponent;
