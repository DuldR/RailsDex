import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonIndexItem = (props) => {

   
    return (
    
        <li key={"pokeItem " + props.pokeId} className="pokemon-index-item">
            <Link to={`/pokemon/${props.pokeId}`}>

                <span>{props.pokeName}</span>
                <img src={props.pokeImg}></img>
            </Link>
    
        </li>
    )
}

