import { getPokemon } from "./generics/get-pokemons";


getPokemon(4)
.then(pokemon=>console.log(pokemon.sprites.front_shiny))
.catch(err=>console.log(err))
.finally(()=>console.log("fin get pokemon"));