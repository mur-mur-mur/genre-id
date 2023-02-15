import React from 'react';
import { GENRES } from '../../services/genres';


export default function nu({  
  genresList, 
  setGenresList }) {

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    fetch('/#', { method: form.method, body: data });
    
    return 'the following genres have been added: ' + [...data.entries()].join(' ');
  };
// eslint-disable-next-line no-unused-vars
  const getList = () => {
    const list = document.getElementBbyId('list');
    const form = document.getElementById('form');
    let nuArray = [];
    const items = list.children;
    for (let item of items) {
      nuArray.push(item);
    }
    form.append(nuArray);
    return form;
  };

  return (
    <>
      <section className="form-container">
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
          <article className="list-container">
            <ul id="list" className="list">{
              genresList.map((genre, index) => {
                return <li key={ index }>{ genre }</li>;
              })    
            }</ul>
          </article>
        </form>
      </section>
    </>
  );
}


