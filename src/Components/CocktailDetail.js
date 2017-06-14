import React from 'react'

const CocktailDetail = (props) => {
  if (!props) {
    return null
  }

  return (
    <div>
      <h2>{props.cocktail.name}</h2>
      <p>{props.cocktail.description}</p>
      <p>{props.cocktail.instructions}</p>
      <p>{props.cocktail.source}</p>
      <h4>Ingredients</h4>
        {props.cocktail.proportions.map(p => {
          return <p key={p.id}>{p.amount} -- {p.ingredient_name}</p>
        })}
    </div>
  )
}

export default CocktailDetail;
