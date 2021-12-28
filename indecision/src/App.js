import React, { useState } from 'react';

import './App.css';

const App = () => {
  // States
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
  }


  const componentDidMount = () => {
    console.log('component counted');
  }




  // Submit form function
  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if(!option) {
      setError('Please enter an option.');
    } else if(options.indexOf(option) > -1) {
      setError('That is already an option.');
    } else if(option) {
      setError(null);
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

  // Deletes a single option from the options state
  const deleteOption = ({ option }) => setOptions(options.filter(optionFilter => optionFilter !== option));

  // The app on the screen
  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />{' '}
        <button>Add Option</button>
      </form><br />
      <button disabled={options.length <= 1} onClick={onMakeDecision}>What should I do?</button>{' '}
      <button disabled={options.length === 0} onClick={removeAll}>Remove All ({options.length})</button>
      {error && <p style={{color:'red'}}>{error}</p>}
      <ul>
        {
          options.map((option, key) => {
            return <li key={key}>{option} <button onClick={(e) => deleteOption({option})}>Delete</button></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
