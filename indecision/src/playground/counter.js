import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count+1);

  const minusOne = () => setCount(count-1);

  const reset = () => setCount(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>Add 1</button>{' '}
      <button onClick={minusOne}>Subtract 1</button>{' '}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;