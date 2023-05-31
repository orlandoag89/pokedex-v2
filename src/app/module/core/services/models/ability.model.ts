import { CommonModel } from "./common.model";

export interface AbilityModel {
  ability: CommonModel;
  is_hidden: boolean;
  slot: number;
}