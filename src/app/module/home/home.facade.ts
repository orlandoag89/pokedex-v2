import { Injectable } from "@angular/core";
import { BaseFacade } from "@core/base-facade";
import { PokemonModel } from "@core/services";
import { ValuesKeys } from "./enums/values.keys";
import { EMPTY, Observable, map, switchMap } from "rxjs";
import { HomeEnum } from "./enums/home.enum";

@Injectable({providedIn: 'root'})
export class HomeFacade extends BaseFacade {

  override initTranslate(): Map<string, string> {
    return this.translation.doTranslate('home', Object.values(ValuesKeys));
  }

  public getRandomPokemon$():Observable<PokemonModel> {
    const indexRandom = Math.round(Math.random() * (HomeEnum.LIMIT_RANDOM - 1 + 1) + 1);
    return this.getLoading$().pipe(
      map(l => l),
      switchMap(lr => {
        if (!lr) {
          return this.getPokemons$();
        }
        return EMPTY;
      }),
      map(p => p[indexRandom]|| undefined)
    );
  }

  public capture(currentPokemon: PokemonModel) {
    this.capturePokemon(currentPokemon);
  }
}