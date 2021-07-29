import {connect} from 'react-redux'
import PokemonDetail from './pokemon_detail'
import { requestOnePokemon } from '../../actions/pokemon_actions'
import { selectOnePokemon, selectPokemonMovesNames, selectPokemonItems } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    moves: selectPokemonMovesNames(state),
    items: selectPokemonItems(state),
    loading: state.ui.loading.detailLoading

})

const mapDispatchToProps = dispatch => ({

    requestOnePokemon: (pokeId) => dispatch(requestOnePokemon(pokeId))

})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)