import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Gets the data - MUST GO FIRST  
  useEffect(() => {
    localGet();
  }, [])

  // Saves the data - MUST GO LAST
  useEffect(() => {
    localSave();
  }, [count])

  // Local save to storage
  const localSave = () => {
    localStorage.setItem('count', JSON.stringify(count));
  }

  // Local get from storage
  const localGet = () => {
    if(localStorage.getItem('count') !== null) {
      let json = JSON.parse(localStorage.getItem('count'));
      setCount(json);
    }
  }

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