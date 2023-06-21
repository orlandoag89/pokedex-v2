import { createAction } from "@ngrx/store";
import {props} from '@ngrx/store';

import { PokemonModel } from "@core/services";

export const loadPokemons = createAction(
  '[Pokemon List] Add Pokemons',
  props<{pokemon: PokemonModel}>()
);

export const initLoader = createAction(
  '[Pokemon Loader]'
);

export const finishLoader = createAction(
  '[Pokemon Not Loader]'
);

export const actionSaveCurrentPokemon = createAction(
  '[Save Pkemon] Save Current Pokemon',
  props<{ currentPokemon: PokemonModel }>()
);

export const switchPokeConsole = createAction(
  '[On Off] Toggle console'
);