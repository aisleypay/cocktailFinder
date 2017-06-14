import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import CocktailsContainer from './CocktailsContainer';

ReactDOM.render(
  <Router>
    <CocktailsContainer />
  </Router>,
  document.getElementById('root'));
