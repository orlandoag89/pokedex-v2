import { Injectable } from "@angular/core";
import { EMPTY, Observable, map, switchMap } from "rxjs";
import { BaseFacade } from "@core/base-facade";
import { PokeStoreKeys, PokemonModel } from "@core/services";
import { ValuesKeys } from "./enums/values.keys";
import { HomeEnum } from "./enums/home.enum";

@Injectable({providedIn: 'root'})
export class HomeFacade extends BaseFacade {

  private _arrayRandom: number[] = [];

  override initTranslate(): Map<string, string> {
    return this.translation.doTranslate('home', Object.values(ValuesKeys));
  }

  public setOffset(): void {
    const currentOffset = this.pokeStoreService.getItemSessionStorage(PokeStoreKeys.CURRENT_OFFSET)
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
    let _currentIndex = this.pokeStoreService.getItemSessionStorage(PokeStoreKeys.CURRENT_RANDOM_INDEX);
    if (!_currentIndex) {
      _currentIndex = this.random() + '';
      this.pokeStoreService.setItemSessionStorage(PokeStoreKeys.CURRENT_RANDOM_INDEX, _currentIndex);
    }
    return this.loading$.pipe(
      map(l => l),
      switchMap(lr => {
        if (!lr) {
          return this.pokemons$;
        }
        return EMPTY;
      }),
      map(p => p[parseInt(_currentIndex!)]|| undefined)
    );
  }

  public capture(currentPokemon: PokemonModel) {
    this.pokeStoreService.removeSessionStorage(PokeStoreKeys.CURRENT_RANDOM_INDEX);
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

  private random(): number {
    const _random = () => Math.round(Math.random() * (HomeEnum.MAX_RANDOM - HomeEnum.MIN_RANDOM + 1) + HomeEnum.MIN_RANDOM);
    const indexRandom = _random();
    const _indexOf = (r:number) => this._arrayRandom.indexOf(r) === -1;
    if (_indexOf(indexRandom)) {
      this._arrayRandom.push(indexRandom);
    } else {
      while(true) {
        const _indexRandom = _random();
        if (_indexOf(_indexRandom)) {
          this._arrayRandom.push(_indexRandom);
          break;
        }
      }
    }
    return this._arrayRandom.slice(-1)[0];
  }
}