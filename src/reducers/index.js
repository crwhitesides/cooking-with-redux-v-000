import { combineReducers } from 'redux'
import { recipes } from './recipes'
import { ingredients } from './ingredients'

export const rootReducer = combineReducers({ recipes, ingredients })
