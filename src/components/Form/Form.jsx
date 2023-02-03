import React, { useState } from 'react';
import { genres } from '../../services/data';

function Form() {
  const [genre, setGenre] = useState('');

  const handleSelection = ev => setGenre(ev.target.value);

  return (
    <>
      <label>enter what you hear</label>
      <select value={ genre } onChange={ handleSelection }>
        <option value={ 'Please select a genre' } selected></option>
        {
          genres.map((item) => (
            <option key={ item.id } value={ item.name }>{ item.name }</option>
          ))
        }
      </select>
    
    </>
  );
}

export default Form;