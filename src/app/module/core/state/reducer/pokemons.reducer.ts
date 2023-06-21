import { createReducer, on } from '@ngrx/store';
import { IPokemon } from "../interfaces/pokemon.interface";
import { actionSaveCurrentPokemon, finishLoader, initLoader, loadPokemons, switchPokeConsole } from '../actions/actions.state';

const initialState: IPokemon = {
  loading: false,
  pokemons: [],
  currentPokemon: undefined,
  consoleStatus: false
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
  }),
  on(actionSaveCurrentPokemon, (state, {currentPokemon}) => {
    return {
      ...state,
      currentPokemon
    }
  }),
  on(switchPokeConsole, (state) => {
    const copyState = {...state};
    copyState.consoleStatus = !copyState.consoleStatus;
    return {
      ...state,
      consoleStatus: copyState.consoleStatus
    }
  })
);