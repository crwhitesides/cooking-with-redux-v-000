import { combineReducers } from 'redux'
import recipes from './recipes'
import ingredients from './ingredients'
import recipeForm from './recipeForm'

export const rootReducer = combineReducers({ recipes, ingredients, recipeForm })
