import React from 'react';
import { Route } from 'react-router-dom'
import { PokemonIndexItem } from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container'
import PokemonFormContainer from './pokemon_form_container'
import LoadingIcon from './loading_icon';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)

  }
  
  componentDidMount(){
    this.props.requestAllPokemon()
  }
  
  render(){

    if (this.props.loading) { return <LoadingIcon /> }
    const listPokemon = this.props.pokemon.map((poke, idx) => {

      return <PokemonIndexItem pokeName={poke.name} pokeImg={poke.imageUrl} pokeId={poke.id} key={"pokeIndex " + idx}/>
    })
    return (
    <section className="pokedex">
      <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
      <Route exact path='/' component={PokemonFormContainer} />
      <ul>
        {listPokemon}
      </ul>
    </section>
    )
  }
}
  
  
  
  export default PokemonIndex;