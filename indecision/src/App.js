import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  // States
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
  }

  // Gets the data - MUST GO FIRST  
  useEffect(() => {
    localGet();
  }, [])

  // Saves the data - MUST GO LAST
  useEffect(() => {
    localSave();
  }, [options])

  // Local save to storage
  const localSave = () => {
    localStorage.setItem('options', JSON.stringify(options));
  }

  // Local get from storage
  const localGet = () => {
    if(localStorage.getItem('options') !== null) {
      let json = JSON.parse(localStorage.getItem('options'));
      setOptions(json);
    }
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
    <div id='wrapper'>
      <h1 id='title'>{app.title}</h1>
      {app.subtitle && <p class='text'>{app.subtitle}</p>}
      <form class='form-area' onSubmit={onFormSubmit}>
        <input class='input-field' type='text' name='option' placeholder='Enter an option...' autocomplete='off' />{' '}
        <button class='button-field'>Add Option</button>
      </form><br />
      <div class='buttons-holder'>
        <button class='button-field' disabled={options.length <= 1} onClick={onMakeDecision}>What should I do?</button>{' '}
        <button class='button-field' disabled={options.length === 0} onClick={removeAll}>Remove All ({options.length})</button>
      </div>
      {error && <p class='text text-red'>{error}</p>}
      <ul>
        {
          options.map((option, key) => {
            return <p class='item' key={key}>{option} <button class='delete-button' onClick={(e) => deleteOption({option})}>Delete</button></p>
          })
        }
      </ul>
    </div>
  );
}

export default App;
