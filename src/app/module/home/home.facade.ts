import { Injectable } from "@angular/core";
import { BaseFacade } from "@core/base-facade";
import { ValuesKeys } from "./enums/values.keys";
import { tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class HomeFacade extends BaseFacade {

  override initTranslate(): Map<string, string> {
    return this.translation.doTranslate('home', Object.values(ValuesKeys));
  }

  public getRandomPokemon() {
    this.retrievePokemons().subscribe()
  }
}