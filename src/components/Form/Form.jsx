import React, { Fragment } from 'react';
import List from '../List/List';
import { GENRES } from '../../services/genres';

export default function Form({  
  genresList, 
  setGenresList }) {
  return (
    <Fragment>
      <section className="form-container">
        <List genresList={ genresList } />
        <form id="form" method="post">
          <article className="form-select">
            <label>genres<br />
              <select
                className="select-element"
                multiple={ true }
                value={ genresList[0] }
                onChange={ e => setGenresList([e.target.value, ...genresList]) }
              >{
                  GENRES.map((genre, index) => {
                    return <option 
                      key={ index } 
                      value={ genre } 
                      onChange={ setGenresList }
                    >{ genre.title }</option>;
                  })
                }</select>
            </label>
          </article>
        </form>
      </section>
    </Fragment>
  );
}
