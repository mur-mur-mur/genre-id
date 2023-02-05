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
      <form 
      id="form-element"
      className="form-element" onSubmit={ handleSubmit }>
        <label 
          htmlFor={ listOne }
        >
          <select 
            id={ listOne } 
            form="form-element"
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
        <div className="list">{ 'Your genres: ' }  
        { items.map((item) => {
          return <p key={ item.index }>{ item }</p>
        })
        }</div>  
        <button 
          className="form-button" 
          type="submit"
        >save list</button>
            
      </form>
    </>
  );
}
