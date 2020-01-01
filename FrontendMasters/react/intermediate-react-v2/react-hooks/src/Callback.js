import React, { useState, useEffect, useCallback, memo } from 'react';

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [])}
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;
