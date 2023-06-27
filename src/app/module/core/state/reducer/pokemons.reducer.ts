import { createReducer, on } from '@ngrx/store';
import { IPokemon } from "./../interfaces/pokemon.interface";
import {
  actionSaveCurrentPokemon,
  actionCaturePokemon,
  finishLoader,
  initLoader,
  loadPokemons,
  switchPokeConsole
} from '../actions/actions.state';

const initialState: IPokemon = {
  loading: false,
  pokemons: [],
  currentPokemon: undefined,
  consoleStatus: false,
  capturedPokemons: []
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
    const pokemonState = copyState.pokemons.concat({
      ...pokemon,
      is_free: true
    });
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
  }),
  on(actionCaturePokemon, (state, {newPokemon}) => {
    const pFound = state.capturedPokemons.findIndex(p=>p.id===newPokemon.id);
    if (pFound === -1) {
      const copyPokemons = [...state.pokemons];
      const indexPokemon = state.pokemons.findIndex(p => p.id === newPokemon.id);
      const copyPokemon = {...state.pokemons[indexPokemon]};
      copyPokemon.is_free = false;
      copyPokemons[indexPokemon] = copyPokemon;
      const copyNewPokemon = {...newPokemon};
      copyNewPokemon.is_free = false;
      const currentPokemonList = state.capturedPokemons.concat(copyNewPokemon);
      return {
        ...state,
        pokemons: copyPokemons,
        capturedPokemons: currentPokemonList
      }
    }
    return state;
  })
);