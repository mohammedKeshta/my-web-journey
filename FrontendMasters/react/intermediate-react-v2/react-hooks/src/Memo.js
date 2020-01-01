import React, { useState, useMemo } from 'react';

const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? 'limegreen' : 'crimson' }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>
        <span role="img" aria-label="plus">
          ➕
        </span>
      </button>
    </div>
  );
};

export default MemoComponent;
