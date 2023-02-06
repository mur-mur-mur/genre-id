import { useState, useId } from 'react';
import { classical, avantGarde } from '../../services/data';

export default function Pockets() {
  const selectId = useId();

  const [listItems, setListItems] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <Panel
        title="classical"
        isActive={ activeItem === 0 }
        onShow={ () => setActiveItem(0) }
      >
        <label htmlFor={ selectId }>
          <select
            id={ selectId }
            size="7"
            value={ listItems }
            onChange={ ev => {
              const options = [...ev.target.selectedOptions];
              const values = options.map(option => option.value);
              setListItems(values);
            }}>{ classical.map((item) => {
              <option 
                key={ item.id } 
                value={ item }
              >{ item }</option>;
            }) 
            }</select>
        </label>
      </Panel>

      <Panel
        title="avantGarde"
        isActive={ activeItem === 1 }
        onShow={ () => setActiveItem(1) }
      >
        <label htmlFor={ selectId }>
          <select
            id={ selectId }
            size="7"
            value={ listItems }
            onChange={ ev => {
              const options = [...ev.target.selectedOptions];
              const values = options.map(option => option.value);
              setListItems(values);
            } }>{ avantGarde.map((item) => {
              <option
                key={ item.id }
                value={ item }
              >{ item }</option>;
            })
            }</select>
        </label>
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="folder-section">
      <h3>{ title }</h3>
      { isActive ? (
        <p>{ children }</p>
      ) : (
        <button className="folder-button" onClick={ onShow }>
            show
        </button>
      ) }
    </section>
  );
}
