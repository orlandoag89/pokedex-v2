import { ActionReducerMap } from "@ngrx/store";
import { IPokemon } from "./interfaces/pokemon.interface";
import { pokemonsReducer } from "./reducer/pokemons.reducer";

export interface AppState {
  pokemons: IPokemon
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  pokemons: pokemonsReducer
}