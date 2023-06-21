import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { PokemonModel } from '@core/services';
import { Subject, interval, takeUntil, takeWhile } from 'rxjs';
import { PokePokedexEnum } from './poke-pokedex.enum';

@Component({
  selector: 'poke-pokedex',
  templateUrl: './poke-pokedex.component.html',
  styleUrls: ['./poke-pokedex.component.scss']
})
export class PokePokedexComponent implements AfterViewInit, OnDestroy {

  public data: any;
  public event$: Subject<string>;
  public currentPokemon$: Subject<PokemonModel>;
    
  public showScreen: boolean = false;
  public destello: boolean = false;
  public status = true;

  private _c = 0;
  private _destroy$ = new Subject<boolean>();

  ngAfterViewInit(): void {
    this.currentPokemon$ = this.data.pokemon;
    this.data.isActive$.pipe(takeUntil(this._destroy$)).subscribe((v:boolean) => this.status = v);
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  openScreen(): void {
    this.event$.next(PokePokedexEnum.SHOW_POKEMON);
    this.showScreen = !this.showScreen;
    interval(200).pipe(
      takeWhile(() => this.showScreen && this._c <= 39)
    ).subscribe(() => {
      this.destello = !this.destello
      this._c++;
    });
  }

  turnOffPokedex():void {
    this.event$.next(PokePokedexEnum.ON_OFF);
    this.status = !this.status;
    this._c = 40;
  }

}