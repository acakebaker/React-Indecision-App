import React, { useState } from 'react';

import './App.css';

const App = () => {
  // States
  const [options, setOptions] = useState([]);

  const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
  }

  // Submit form function
  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      setOptions([...options, option]);
      e.target.elements.option.value = null;
    }
  }

  // Remove all from array function
  const removeAll = () => setOptions([]);

  // Make a decision button function
  const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * options.length);
    alert('You should do: ' + options[randomNumber]);
  }

  // The app on the screen
  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />{' '}
        <button>Add Option</button>
      </form><br />
      <button disabled={options.length <= 1} onClick={onMakeDecision}>What should I do?</button>{' '}
      <button disabled={options.length === 0} onClick={removeAll}>Remove All ({options.length})</button>
      <ul>
        {
          options.map((option, key) => {
            return <li key={key}>{option}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
