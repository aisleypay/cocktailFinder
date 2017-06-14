import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import CocktailList from './Components/CocktailList';
import CocktailDetail from './Components/CocktailDetail';
import NewCocktailForm from './Components/NewCocktailForm';


class CocktailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: []
    }

    this.createCocktail = this.createCocktail.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then( res => res.json())
    .then( cocktails => this.setState({ cocktails }))
  }

  createCocktail(cocktail) {
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        cocktail: {
          name: cocktail.name,
          description: cocktail.description,
          instructions: cocktail.instructions,
          source: cocktail.source,
          proportions: cocktail.proportions
        }
      })
    }).then(resp => resp.json() )
      .then(cocktail => this.setState((previousState) => {
        return {
          cocktails: [...previousState.cocktails, cocktail]
        }
      }))
  }

  render() {
    return (
      <div>
        <div className="row">
          <Link to="/cocktails/new">Add New Cocktail</Link>
        </div>
        <div className="row">
          <div className="col s4">
            <CocktailList cocktails={this.state.cocktails} />
          </div>
          <div className="col s8">
            <Switch>
              <Route exact path='/cocktails/new' render={() => < NewCocktailForm addCocktail={this.createCocktail}/>} />
              <Route exact path='/cocktails/:id' render={(routerProps) => {
                const id = routerProps.match.params.id
                const cocktail = this.state.cocktails.find( c => c.id == parseInt(id))

                return <CocktailDetail cocktail={cocktail} />
              }} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
