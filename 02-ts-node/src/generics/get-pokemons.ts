import axios from "axios";
import { Pokemon } from "../interfaces";



const urlpokemon:string="https://pokeapi.co/api/v2/";

export const getPokemon=async(pokemonId:number):Promise<Pokemon>=>{
    const {data} = await axios.get<Pokemon>(`${urlpokemon}/pokemon/${pokemonId}`);
    return data;
}