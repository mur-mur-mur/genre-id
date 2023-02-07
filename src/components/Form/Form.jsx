import React, { useState } from 'react';
import { genres } from '../../services/genreData';

import './Form.css';

export default function Form() {
  
  const [playCount, setPlayCount] = useState(0);

  return (
    <>
      <article className="form-container">
        <form id="form-element" className="form-element">
          <label>
            <select className="form-select">
              {
                genres.map((genre) => (
                  <option key={ genre.id } value={ genre }>{ genre }</option>
                )) 
              }
            </select>
          </label>
        </form>
      </article>
    </>
  );
}
