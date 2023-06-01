import { createReducer, on } from '@ngrx/store';
import { IPokemon } from "../interfaces/pokemon.interface";
import { finishLoader, initLoader, loadPokemons } from '../actions/actions.state';

const initialState: IPokemon = {
  loading: false,
  pokemons: []
}

export const pokemonsReducer = createReducer(initialState,
  on(initLoader, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(finishLoader, (state) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(loadPokemons, (state, {pokemon}) => {
    const copyState = {...state};
    const pokemonState = copyState.pokemons.concat(pokemon);
    copyState.pokemons = pokemonState;
    return {
      ...state,
      pokemons: copyState.pokemons
    }
  })
);