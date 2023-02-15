import React from 'react';
import { GENRES } from '../../services/genres';
const DATABASE_URL = process.env.DATABASE_URL;

export default function nu({  
  genresList, 
  setGenresList }) {

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    fetch(DATABASE_URL, { method: form.method, body: data });
    
    return 'the following genres have been added: ' + [...data.entries()].join(' ');
  };  

  return (
    <>
      <section className="form-container">
        <article className="list-container">
          <ul id="list" className="list">{
            genresList.map((genre, index) => {
              return <li className="list-item" key={ index }>{ genre }</li>;
            })
          }</ul>
        </article>
        <form id="form" method="post" onSubmit={ handleSubmit }>
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
                    >{ genre }</option>;
                  })
                }</select>
            </label>
          </article>
          
        </form>
      </section>
    </>
  );
}


