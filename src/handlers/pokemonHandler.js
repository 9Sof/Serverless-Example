const pokemonData = require('../mock/pokemon.json')

exports.findAll = async (event) => {
  console.log(event.queryStringParameters)
  const { limit, offset } = await event.queryStringParameters
  const pokemons = await pokemonData.pokemon.slice(offset, limit)
  console.log(pokemons)
  
  return {
    statusCode: 200,
    body: JSON.stringify(pokemons)
  }
}

exports.findOne = async (event) => {
  console.log(event.pathParameters)
  const { pokemonId } = await event.pathParameters
  const pokemon = await pokemonData.pokemon.find(pokemon => pokemon.id === Number(pokemonId))
  
  return {
    statusCode: 200,
    body: JSON.stringify(pokemon)
  }
}
