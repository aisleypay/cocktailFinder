import React, { Component } from 'react';

export default class NewCocktailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      instructions: '',
      source: '',
      currIngredient: '',
      currAmount: '',
      proportions: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addProportion = this.addProportion.bind(this)
  }

  handleChange(event) {
    if (event.target.name !== 'proportions') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  addProportion(event) {
    event.preventDefault();

    this.setState({
      proportions: [...this.state.proportions, {amount: this.state.currAmount, ingredient: this.state.currIngredient}],
      currIngredient: '',
      currAmount: ''
    })
    return null
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addCocktail(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col s8">
        <div className="row">
          <div className="input-field col s8">
          <input placeholder="Cocktail Name" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
          <textarea className="materialize-textarea" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
          <textarea className="materialize-textarea" placeholder="Instructions" name="instructions" value={this.state.instructions} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
          <input placeholder="Source" name="source" value={this.state.source} onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input placeholder="Amount" name="currAmount" onChange={this.handleChange} />
          </div>
          <div className="input-field col s4">
            <input placeholder="Ingredient" name="currIngredient" onChange={this.handleChange} />
          </div>
        </div>
        <div className="row">
          <button className="waves-effect waves-light btn lime" onClick={this.addProportion}>Add Ingredient</button>
          <h4>Current Ingredients</h4>
          {this.state.proportions.map((i, index) => <p key={index}>{i.amount} -- {i.ingredient}</p>)}
        </div>
        <input className="waves-effect waves-light btn pink" type="submit" value="Submit" />
      </form>

    )
  }
}
