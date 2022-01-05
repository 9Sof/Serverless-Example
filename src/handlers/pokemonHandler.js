const pokemonData = require('../mock/pokemon.json')

exports.pokemon = async (event) => {
  console.log(event.queryStringParameters)
  const { limit, offset } = await event.queryStringParameters
  const pokemons = await pokemonData.pokemon.slice(offset, limit)
  console.log(pokemons)
  
  return {
    statusCode: 200,
    body: JSON.stringify(pokemons)
  }
}
