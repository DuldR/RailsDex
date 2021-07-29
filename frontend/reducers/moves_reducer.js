import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions'

const movesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = {}

    switch (action.type) {
        case RECEIVE_ONE_POKEMON:
            newState = Object.assign({}, action.payload.moves);
            return newState
        default:
            return state;
    }
}

export default movesReducer;

