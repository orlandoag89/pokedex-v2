import { PokemonModel } from "../../services/models/pokemon.model";

export interface IPokemon {
  loading: boolean;
  pokemons: PokemonModel[];
}