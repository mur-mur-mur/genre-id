import React, { useState } from 'react';
import { genres } from '../../services/data';

function Form() {
  const [genre, setGenre] = useState('');

  const handleSelection = ev => setGenre(ev.target.value);

  return (
    <>
      <p>this is a form</p>
      <label>select which genre(s) to add:
        <select
          name="selectedGenres"
          defaultValue={ 'multiple genres can be selected' }
          multiple={ true }
          value={ genre }
          onChange={ handleSelection }
        >
          {
            genres.map((item) => (
              <option key={ item.id } value={ item.name }>{ item.name }</option>
            ))
          }
        </select>
      </label>
    </>
  );
}

export default Form;