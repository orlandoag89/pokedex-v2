import { Component, AfterViewInit, inject, ChangeDetectorRef } from '@angular/core';
import { CapturedPokemosFacade } from './../captured-pokemons.facade';
import { EMPTY, Observable, map, switchMap } from "rxjs";
import { PokemonModel } from '@core/services';
import { CapturedPokemonsKeys } from '../enums/captured-pokemos.key';

@Component({
  selector: 'poke-captured-pokemons-page',
  templateUrl: './captured-pokemons-page.component.html',
  styleUrls: ['./captured-pokemons-page.component.scss']
})
export class CapturedPokemonsPageComponent implements AfterViewInit {

  public pokemons$: Observable<PokemonModel[]>;
  public translate: Map<string, string>;
  public CapturedPokemonsKeys = CapturedPokemonsKeys;

  private _facade: CapturedPokemosFacade = inject(CapturedPokemosFacade);
  private cdref: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor() { }

  ngAfterViewInit(): void {
    this.translate = this._facade.initTranslate();
    this.pokemons$ = this._facade.capturedPokemons$;
    this.cdref.detectChanges();
  }
}
