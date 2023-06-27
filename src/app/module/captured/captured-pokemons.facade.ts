import { BaseFacade } from "@core/base-facade";
import { Injectable } from "@angular/core";
import { CapturedPokemonsKeys } from "./enums/captured-pokemos.key";

@Injectable({ providedIn: 'root'})
export class CapturedPokemosFacade extends BaseFacade {
  
  override initTranslate(): Map<string, string> {
    return this.translation.doTranslate('captured_pokemons', Object.values(CapturedPokemonsKeys))
  }
}