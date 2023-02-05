import React, { useState, useId } from 'react';
import { genres } from '../../services/data';

import './Form.css';

export default function Form() {
  const listOne = useId();

  const [items, setItems] = useState([]);

  function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const formData = new FormData(form);
    /* eslint-disable */
    console.log(new URLSearchParams(formData).toString());
    const formJson = Object.fromEntries(formData.entries());
    /* eslint-disable */
    return console.log([...formData.entries()]);
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label 
          htmlFor={ listOne }
        >
          <select 
            id={ listOne } 
            className="form-select"
            name="form-select" 
            multiple={ true }
            value={ items }
            onChange={ ev => {
                const options = [...ev.target.selectedOptions];
                const values= options.map(option => option.value);
                setItems(values);
              }
            }
          >
            {
              genres.map(
                (val, index) => {
                  return  <option 
                            key={ index } 
                            value={ val } 
                          >{ val }</option> 
                }
              )
            }
          </select>
        </label>
        <p>Your genre: { items }</p>
      
      </form>
    </>
  );
}
