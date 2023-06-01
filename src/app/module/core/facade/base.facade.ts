import { inject } from "@angular/core";
import { Store } from '@ngrx/store';
import { finalize, map, mergeMap, switchMap } from "rxjs";

import { TranslatorService } from "@core/translator";
import { PokeApiService } from "@core/services";
import { initLoader, loadPokemons, finishLoader, loaderSelector } from "@core/state";

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  private readonly _store: Store = inject(Store<any>);
  private readonly _pokeApi: PokeApiService = inject(PokeApiService);
  
  abstract initTranslate(): Map<string,string>;

  public retrievePokemons() {
    this._dispatch(initLoader())
    return this._pokeApi.geAlltPokemons().pipe(
      switchMap(v => v.results),
      map(p => this._pokeApi.getPokemon(p.url)),
      mergeMap(v => v),
      map(p => this._dispatch(loadPokemons({pokemon: p}))),
      finalize(() => this._dispatch(finishLoader()))
    );
  }

  getLoading() {
    return this._select(loaderSelector);
  }

  private _dispatch(action: any) {
    this._store.dispatch(action);
  }

  private _select(selector:any) {
    return this._store.select(selector);
  }
}