import { AbilityModel } from "./ability.model";
import { CommonModel } from "./common.model";
import { MovesModel } from "./moves.model";
import { SpriteModel } from "./sprite.model";
import { StatModel } from "./stat.model";
import { TypeModel } from "./type.model";

export interface PokemonModel {
  abilities: AbilityModel[];
  base_experience: number|null;
  forms: CommonModel[];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MovesModel[];
  name: string;
  past_types: [];
  species: CommonModel;
  sprites: SpriteModel;
  stats: StatModel[];
  types: TypeModel[];
  is_free: boolean;
}