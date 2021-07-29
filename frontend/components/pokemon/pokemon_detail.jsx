import React from 'react'
import { Route } from 'react-router-dom'
import ItemDetailContainer from '../items/item_detail_container'
import LoadingIcon from './loading_icon';


class PokemonDetail extends React.Component {


    constructor(props) {
        super(props)

        

        this.isLoaded = this.isLoaded.bind(this)
        this.isDetailLoaded = this.isDetailLoaded.bind(this)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.requestOnePokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
            this.props.requestOnePokemon(this.props.match.params.pokemonId)
        }
    }

    isLoaded() {
        return (this.props.pokemon !== undefined)
    }

    isDetailLoaded() {
        if (this.isLoaded() === true) {
            return (this.props.pokemon.attack !== undefined)
        }
    }


    render() {

        if (this.props.loading) { return <LoadingIcon /> }

        const { pokemon, moves, items } = this.props
        
        const listMoves = moves.join(", ");
        const listItems = items.map((item, idx) => (

            <li key={"list-" + idx}>
                Name: {item[0]}
                <img src={item[1]}></img>
            </li>
        ))



        return (
            
            <section className="pokemon-detail">
                
                <figure>
                    <img src={this.isLoaded() ? pokemon.imageUrl : ""}></img>

                </figure>

                <ul>
                    <li><h2>{this.isLoaded() ? pokemon.name : "Loading" }</h2></li>
                    <li>{this.isDetailLoaded() ? "Type: " + pokemon.pokeType : "Type: Loading"}</li>
                    <li>{this.isDetailLoaded() ? "Attack: " + pokemon.attack : "Attack: Loading"}</li>
                    <li>{this.isDetailLoaded() ? "Defense: " + pokemon.defense : "Defense: Loading"}</li>
                 </ul>

                <ul>
                    <li>Moves: {listMoves}</li>
                </ul>

                <ul className="toys">
                    <h2>Items</h2>

                    <Route path='/pokemon/:pokemonId/items/:itemId' component={ItemDetailContainer} />

                </ul>
            
            </section>
        )
    }
}

export default PokemonDetail