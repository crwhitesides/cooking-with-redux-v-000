import uuidV4  from 'uuid/v4';

export function ingredients(state = [], action){
  switch (action.type) {

    case 'CREATE_INGREDIENT':
      let ingredient = Object.assign({}, state, action.payload, {id: uuidV4()})
      return state.concat(ingredient)

    default:
      return state;
  }
}

export function unselectedIngredients(ingredients, selectedIngredientIds){
  return ingredients.filter((ingredient) => {
	   return !selectedIngredientIds.includes(ingredient.id)
  })
}

export function findIngredientById(id, ingredients) {
  return ingredients.find((ingredient) => {
    return ingredient.id === id
  })
}
