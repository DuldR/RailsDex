import * as APIUtil from '../util/api_util';
import { receiveErrors } from '../actions/error_actions'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON";
export const START_LOADING_ONE_POKEMON = "START_LOADING_ONE_POKEMON";


export const receiveAllPokemon = (payload) => ({
  type: RECEIVE_ALL_POKEMON,
  payload
})

export const receiveOnePokemon = (payload) => ({
  type: RECEIVE_ONE_POKEMON,
  payload
})

export const startLoadingAllPokemon = () => ({
    type: START_LOADING_ALL_POKEMON
});

export const startLoadingOnePokemon = () => ({
    type: START_LOADING_ONE_POKEMON
});

export const requestAllPokemon = () => (dispatch) => {
  dispatch(startLoadingAllPokemon())
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
}

export const requestOnePokemon = (poke) => (dispatch) => {
  dispatch(startLoadingOnePokemon())
  return APIUtil.fetchOnePokemon(poke)
    .then(payload => dispatch(receiveOnePokemon(payload))
  )
}

export const createPokemon = (poke) => dispatch => (
  APIUtil.createPokemon(poke).then(
    pokemon => {
      dispatch(receiveOnePokemon(pokemon));
      return pokemon
    })
    .fail( 
      err => {
        dispatch(receiveErrors(err.responseJSON))
      }
    )
  )
