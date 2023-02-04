import React, { useState } from 'react';
import { genres } from '../../services/data';

import './Form.css';

function Form() {
  const [genre, setGenre] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    return setGenre(ev.target.value);
  };

  const handleClick = (ev) => {
    setGenre(ev.target.value);
  };

  return (
    <>
      <section className="form-section"> 
        <form className="form-element" onSubmit={ handleSubmit }>
          
          <fieldset>
            <label className="form-label">genres<br />
              <select
                id="form-select"
                className="form-select"
                name="selectedGenres"
                value={ genre }
                defaultValue={ 'select an item' }
                multiple={ true }
              >
                {
                  genres.map((item) => (
                    <option 
                      onClick={ handleClick }
                      className="form-option"
                      key={ item.id } 
                      value={ item.name }>{ 
                        item.name 
                      }</option>
                  ))
                }
              </select><br />

            </label>
            <button className="form-button">save</button>

          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Form;
