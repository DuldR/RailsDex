import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  let newState = {}

  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    newState = Object.assign({}, state, action.payload);
    return newState
  case RECEIVE_ONE_POKEMON:
    newState = Object.assign({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});
    return newState
  default:
    return state;
  }
}
  
export default pokemonReducer;
