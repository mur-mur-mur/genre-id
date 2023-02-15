/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GENRES } from '../../services/genres';
import './Form.css';

export default function Form({ genresList, setGenresList, data, options }) {
  const [name, setName] = useState([]);
  return (
    <>
      <section className="form-container">
        <article className="form-select">
          <select
            size="4"
            multiple={ true }
            defaultValue={['']}
            className="select-element"
            value={ name }
            onChange={ e => {
              return setGenresList(
                [e.target.value, ...genresList]
              ); 
            } }>
            {
              GENRES.map((genre, index) => <option key={index}>{ genre }</option>)
            }
          </select>
        </article>
        
      </section>
      <article className="list-element">
        <ul className="list">{
          genresList.map((genre, index) => (
            <li key={ index }>{ genre }</li>
          ))
        }</ul>
      </article>
    </>

  );
}
 

