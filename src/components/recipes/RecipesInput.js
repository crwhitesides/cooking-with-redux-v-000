import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addRecipe } from '../../actions/recipes'
import { AddIngredients } from '../ingredients/AddIngredients'


export class RecipesInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      calories: ''
    }
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleOnCaloriesChange(event) {
    this.setState({
      calories: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
    this.props.addRecipe(recipe)
    this.setState({
      name: '',
      calories: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <h1>Add a recipe</h1>
          <p>
            <input
              type='text'
              value={this.state.name}
              placeholder='recipe name'
              onChange={(event) => this.handleOnNameChange(event)} />
          </p>
          <p>
            <input
              type='text'
              value={this.state.calories}
              placeholder='number of calories'
              onChange={(event) => this.handleOnCaloriesChange(event)} />
          </p>
          <AddIngredients />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipe }, dispatch)
}

function mapStateToProps(state) {
  return { selectedIngredients: state.recipeForm.ingredientIds }
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
