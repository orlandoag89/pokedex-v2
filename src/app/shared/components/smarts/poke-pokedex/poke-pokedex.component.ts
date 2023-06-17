import { Component, Output, EventEmitter, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { PokemonModel } from '@core/services';
import { Observable, Subject, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'poke-pokedex',
  templateUrl: './poke-pokedex.component.html',
  styleUrls: ['./poke-pokedex.component.scss']
})
export class PokePokedexComponent implements AfterViewInit {

  public data: any;
  public currentPokemon$: Subject<PokemonModel>;
  
  @Output() private capture = new EventEmitter<void>();
  
  public showScreen: boolean = false;
  public destello: boolean = false;
  public status = true;

  private _c = 0;

  ngAfterViewInit(): void {
    this.currentPokemon$ = this.data.pokemon;
  }

  openScreen(): void {
    this.capture.emit();
    this.showScreen = !this.showScreen;
    interval(200).pipe(
      takeWhile(() => this.showScreen && this._c <= 39)
    ).subscribe(() => {
      this.destello = !this.destello
      this._c++;
    });
  }

  turnOffPokedex():void {
    this.status = !this.status;
    this._c = 40;
  }

}