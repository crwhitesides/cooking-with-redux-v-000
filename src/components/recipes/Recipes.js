import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Recipes extends Component {
  render(){

    let recipes = this.props.recipes.map(
      (recipe, index) => <li key={index}>{recipe.name}</li>
    )

    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes }
}


export const ConnectedRecipes = connect(mapStateToProps)(Recipes)
