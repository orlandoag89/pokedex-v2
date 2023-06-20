import { Type, ViewContainerRef, inject } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, finalize, map, mergeMap, switchMap } from "rxjs";

import { TranslatorService } from "@core/translator";
import { PokeApiService, PokeDialogService, PokemonModel } from "@core/services";
import { initLoader, loadPokemons, finishLoader, loaderSelector, selectorPokemons, actionSaveCurrentPokemon } from "@core/state";

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  private readonly _store: Store = inject(Store<any>);
  private readonly _pokeApi: PokeApiService = inject(PokeApiService);
  private readonly _dialog: PokeDialogService = inject(PokeDialogService);
  
  abstract initTranslate(): Map<string,string>;

  setViewContainerRef(v: ViewContainerRef) {
    this._dialog.viewContainerRef = v;
  }

  dialog(type: 'dialog', element: Type<unknown>, options?: Object, afterClose?: () => void, click?: () => void) {
    this._dialog.dialog(type, element, options, afterClose, click);
  }

  public retrievePokemons(): Observable<void> {
    this._dispatch(initLoader())
    return this._pokeApi.geAlltPokemons().pipe(
      switchMap(v => v.results),
      map(p => this._pokeApi.getPokemon(p.url)),
      mergeMap(v => v),
      map(p => this._dispatch(loadPokemons({pokemon: p}))),
      finalize(() => this._dispatch(finishLoader()))
    );
  }

  public getLoading(): Observable<boolean> {
    return this._select<boolean>(loaderSelector);
  }

  public getPokemons(): Observable<PokemonModel[]> {
    return this._select<PokemonModel[]>(selectorPokemons);
  }

  public setPokemon(p: PokemonModel):void {
    return this._dispatch(actionSaveCurrentPokemon({ currentPokemon: p}))
  }

  private _dispatch(action: any) {
    this._store.dispatch(action);
  }

  private _select<T>(selector:any):Observable<T> {
    return this._store.select(selector);
  }
}