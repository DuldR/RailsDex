export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectOnePokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonMovesNames = (state) => {
  let returnMoves = Object.values(state.entities.moves).map((move) => {
    return move.name;
  })
  // return Object.values(state.entities.moves)

  return returnMoves

}

export const selectPokemonItems = (state) => {
  let returnItems = Object.values(state.entities.items).map((item) => {
    return [item.name, item.imageUrl]
  })

  return returnItems

}