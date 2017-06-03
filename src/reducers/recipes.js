import uuidV4  from 'uuid/v4';

export function recipes(state = [], action){
  switch (action.type) {

    case 'ADD_RECIPE':
      let recipe = Object.assign({}, state, action.payload, {id: uuidV4()})
      return state.concat(recipe)

    default:
      return state
  }
}
