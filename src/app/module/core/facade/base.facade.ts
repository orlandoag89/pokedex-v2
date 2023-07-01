import { ViewContainerRef, inject } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, finalize, map, mergeMap, switchMap } from "rxjs";

import { TranslatorService } from "@core/translator";
import { PokeApiService, PokeStoreService, PokemonModel } from "@core/services";
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
import { IDialog, PokeDialogService } from "@shared/libs/dialog";
import * as jsonLinks from './../../../../assets/json/links.json';
import * as config from './../../../../../config.json';

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  protected readonly pokeStoreService: PokeStoreService = inject(PokeStoreService);
  protected readonly OFFSET_POKEMON = 15;

  private readonly _store: Store = inject(Store<any>);
  private readonly _pokeApi: PokeApiService = inject(PokeApiService);
  private readonly _dialog: PokeDialogService = inject(PokeDialogService);
  
  abstract initTranslate(): Map<string,string>;

  public get config() {
    return config;
  }

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
  
  public dialog<R>(options: IDialog<R>):void {
    this._dialog.dialog<R>(options);
  }

  public closeDialog():void {
    this._dialog.viewContainerRef.clear();
  }

  public retrievePokemons$(offset:string): Observable<void> {
    this.initLoader();
    return this._pokeApi.geAlltPokemons(offset).pipe(
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

  public get pokeConsoleStatus$(): Observable<boolean> {
    return this._select$<boolean>(selectorConsoleStatus);
  }

  public get loading$(): Observable<boolean> {
    return this._select$<boolean>(loaderSelector);
  }

  public get pokemons$(): Observable<PokemonModel[]> {
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