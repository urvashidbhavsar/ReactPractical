import React, { useState, useMemo, useCallback } from 'react';

const ExpensiveComputation = ({ count }) => {
  const computedValue = useMemo(() => {
    console.log("Computing...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return count + total;
  }, [count]); // Recompute only when `count` changes

  return <p>Computed Value: {computedValue}</p>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // Input change handler, not memoized
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <ExpensiveComputation count={count} />
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <p>Text: {text}</p>
    </div>
  );
};

export default Counter;
