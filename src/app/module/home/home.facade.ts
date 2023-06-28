import { Injectable } from "@angular/core";
import { BaseFacade } from "@core/base-facade";
import { PokeStoreKeys, PokemonModel } from "@core/services";
import { ValuesKeys } from "./enums/values.keys";
import { EMPTY, Observable, map, switchMap, filter, reduce, toArray, tap } from "rxjs";
import { HomeEnum } from "./enums/home.enum";

@Injectable({providedIn: 'root'})
export class HomeFacade extends BaseFacade {

  override initTranslate(): Map<string, string> {
    return this.translation.doTranslate('home', Object.values(ValuesKeys));
  }

  public setOffset(): void {
    const currentOffset = this.pokeStoreService.getItemSessionStorage(PokeStoreKeys.CURRENT_OFFSET);
    if(!currentOffset) {
      this.pokeStoreService.setItemSessionStorage(PokeStoreKeys.CURRENT_OFFSET, '0');
      return;
    }
    const offsetNum = Number.parseInt(currentOffset);
    const _offset = offsetNum + this.OFFSET_POKEMON;
    this.pokeStoreService.setItemSessionStorage(PokeStoreKeys.CURRENT_OFFSET, `${_offset}`);
  }

  public get offset(): string {
    return this.pokeStoreService.getItemSessionStorage(PokeStoreKeys.CURRENT_OFFSET)??'';
  }

  public getRandomPokemon$():Observable<PokemonModel> {
    const indexRandom = Math.round(Math.random() * (HomeEnum.LIMIT_RANDOM - 1 + 1) + 1);
    return this.loading$.pipe(
      map(l => l),
      switchMap(lr => {
        if (!lr) {
          return this.pokemons$;
        }
        return EMPTY;
      }),
      map(p => p[indexRandom]|| undefined)
    );
  }

  public capture(currentPokemon: PokemonModel) {
    this.capturePokemon(currentPokemon);
  }

  public pokemonsInStore$() {
    return this.pokemons$.pipe(
      map(p => p.length)
    );
  }

  public freePokemons$() {
    return this.pokemons$.pipe(
      map((p: PokemonModel[]) => p.filter(v => v.is_free))
    )
  }
}