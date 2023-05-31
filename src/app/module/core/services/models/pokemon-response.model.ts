import { PokemonResultModel } from "./pokemon-result.model";

export interface PokemonResponseModel {
  count: number;
  next: string|null;
  prvius: string |null;
  results: PokemonResultModel[];
}

