import { createAction } from "@ngrx/store";
import {props} from '@ngrx/store'
import { PokemonModel } from "../../services/models/pokemon.model";

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