import { Type, ViewContainerRef, inject } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, finalize, map, mergeMap, switchMap } from "rxjs";

import { TranslatorService } from "@core/translator";
import { PokeApiService, PokemonModel } from "@core/services";
import {
  initLoader,
  loadPokemons, 
  finishLoader, 
  loaderSelector,
  selectorPokemons,
  actionSaveCurrentPokemon,
  switchPokeConsole,
  selectorConsoleStatus,
  selectorCapturedPokemons,
  actionCaturePokemon
} from "@core/state";
import { PokeDialogService } from "@shared/libs";
import * as jsonLinks from './../../../../assets/json/links.json';

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  private readonly _store: Store = inject(Store<any>);
  private readonly _pokeApi: PokeApiService = inject(PokeApiService);
  private readonly _dialog: PokeDialogService = inject(PokeDialogService);
  
  abstract initTranslate(): Map<string,string>;

  public get linkList(): Object {
    const {links} = jsonLinks;
    return links;
  }

  public get capturedPokemons$(): Observable<PokemonModel[]> {
    return this._select$<PokemonModel[]>(selectorCapturedPokemons)
  }

  public capturePokemon(p: PokemonModel) {
    return this._dispatch(actionCaturePokemon({newPokemon: p}));
  }
  public setViewContainerRef(v: ViewContainerRef): void {
    this._dialog.viewContainerRef = v;
  }

  public onFinishLoaderByTime(time:number) {
    setTimeout(() => {
      this.finishLoader();
    }, time);
  }
  
  public dialog<R>(
    title:string, 
    type: 'dialog', 
    element: Type<unknown>, 
    options?: Object, 
    click?: (arg?:R) => void,
    afterClose?: () => void
  ):void {
    this._dialog.dialog<R>(title, type, element, options, click, afterClose);
  }

  public retrievePokemons$(): Observable<void> {
    this.initLoader();
    return this._pokeApi.geAlltPokemons().pipe(
      switchMap(v => v.results),
      map(p => this._pokeApi.getPokemon(p.url)),
      mergeMap(v => v),
      map(p => this._dispatch(loadPokemons({pokemon: p}))),
      finalize(() => this.finishLoader())
    );
  }

  public initLoader(): void {
    return this._dispatch(initLoader());
  }

  public finishLoader(): void {
    return this._dispatch(finishLoader());
  }

  public toggleConsoleStatus(): void {
    return this._dispatch(switchPokeConsole());
  }

  public pokeConsoleStatus$(): Observable<boolean> {
    return this._select$<boolean>(selectorConsoleStatus);
  }

  public getLoading$(): Observable<boolean> {
    return this._select$<boolean>(loaderSelector);
  }

  public getPokemons$(): Observable<PokemonModel[]> {
    return this._select$<PokemonModel[]>(selectorPokemons);
  }

  public setPokemon(p: PokemonModel):void {
    return this._dispatch(actionSaveCurrentPokemon({ currentPokemon: p}))
  }

  private _dispatch(action: any) {
    this._store.dispatch(action);
  }

  private _select$<T>(selector:any):Observable<T> {
    return this._store.select(selector);
  }
}