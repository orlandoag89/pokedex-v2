import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IPokemon } from "../interfaces";

export const selectorPokemonInfo = (state: AppState) => state.pokemons;

export const loaderSelector = createSelector(
  selectorPokemonInfo,
  (state: IPokemon) => state.loading
);

export const selectorPokemons = createSelector(
  selectorPokemonInfo,
  (state: IPokemon) => state.pokemons
);

export const selectorConsoleStatus = createSelector(
  selectorPokemonInfo,
  (state: IPokemon) => state.consoleStatus
);