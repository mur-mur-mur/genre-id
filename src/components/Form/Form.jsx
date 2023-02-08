import React, { useState } from 'react';
import { genres } from '../../services/genres';
import './Form.css';

export default function Form() {
  const [genresList, setGenresList] = useState([]);
  return (
    <>
      <select
        className="select-list"
       
        value={ genresList }
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
      <button>Add</button>
    </>
  );
}
 

