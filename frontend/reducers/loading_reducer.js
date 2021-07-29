import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_ONE_POKEMON,
  START_LOADING_ALL_POKEMON,
  START_LOADING_ONE_POKEMON
} from '../actions/pokemon_actions';

import { RECEIVE_ERRORS } from '../actions/error_actions'

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_ONE_POKEMON:
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_ALL_POKEMON:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_ONE_POKEMON:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;