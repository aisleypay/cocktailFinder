import React from 'react';
import { Link } from 'react-router-dom';

const CocktailList = (props) => {

  return (
    <div>
      <h1>Cocktails</h1>
      <ul>
        {props.cocktails.map((c) => <li key={c.id}><Link to={`/cocktails/${c.id}`}>{c.name}</Link></li>)}
      </ul>
    </div>
  )
}

export default CocktailList;
