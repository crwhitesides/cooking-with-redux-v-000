import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { recipeFormAddIngredient } from '../../actions/ingredients'

export class AddIngredient extends Component {
  constructor(props) {
    super(props)
  }

  handleOnClick(){
    this.props.recipeFormAddIngredient(this.props.id)
  }

  render(){
    return(
      <div>
        <button onClick={() => this.handleOnClick()}>{this.props.name}</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ recipeFormAddIngredient }, dispatch)
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)
