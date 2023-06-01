import { DreamWorldModel } from "./dream-world.model";
import { HomeModel } from "./home.model";
import { OfficialArtworkModel } from "./official-artwork.model";

export interface OtherModel {
  dream_world: DreamWorldModel;
  home: HomeModel;
  'official-artwork': OfficialArtworkModel;
}