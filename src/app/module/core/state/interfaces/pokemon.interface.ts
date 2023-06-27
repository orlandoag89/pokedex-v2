import { PokemonModel } from "@core/services";

export interface IPokemon {
  loading: boolean;
  pokemons: PokemonModel[];
  currentPokemon: PokemonModel|undefined;
  consoleStatus:boolean;
  capturedPokemons: PokemonModel[];
}