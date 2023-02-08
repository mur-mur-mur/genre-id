import React, { useState } from 'react';
import { genres } from '../../services/genres';
import './Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [genresList, setGenresList] = useState([]);
  
  function handleAdd(e) {
    setName(e.target.value);
  }

  return (
    <>
      <select
        className="select-list"
        value={ name }
        onChange={ e => setGenresList([e.target.value, ...genresList]) }>
        {
          genres.map((genre, index) => <option key={index}>{ genre }</option>)
        }
      </select>
      <ul className="ul-list">{ 
        genresList.map((genre, index) => (
          <li key={ index }>{ genre }</li>
        )) 
      }</ul>
      <button onClick={ handleAdd }>Add</button>
      <p>{ name }</p>
    </>
  );
}
 

