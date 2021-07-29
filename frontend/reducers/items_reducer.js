import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = {}

    switch (action.type) {
        case RECEIVE_ONE_POKEMON:
            newState = Object.assign({}, action.payload.items);
            return newState
        default:
            return state;
    }
}

export default itemsReducer;

