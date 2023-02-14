import React, { useState } from 'react';
import { GENRES } from '../../services/genres';
import './Form.css';

export default function Form({ genresList, setGenresList }) {
  const [name, setName] = useState('');
  
  function handleAdd(e) {
    setName(e.target.value);
  }

  return (
    <>
      <select
        className="select-list"
        value={ name }
        onChange={ e => setGenresList([e.target.value, ...genresList]) }>
        <option value=""></option>
        {
          GENRES.map((genre, index) => <option key={index}>{ genre }</option>)
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
 

