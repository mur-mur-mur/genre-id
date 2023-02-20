import React from 'react';

export default function List({ genresList }) {
  return (
    <>
      <article className="list-container">
        <ul id="list" className="list">{
          genresList.map((genre, index) => {
            return <li className="list-item" key={ index }>{ genre.title }</li>;
          })
        }</ul>
      </article> 
    </>
  );
}
