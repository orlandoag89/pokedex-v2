import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { PokemonModel } from '@core/services';
import { PokedexEnum } from '@shared/enums';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'pkd2-pokedex',
  templateUrl: './pkd2-pokedex.component.html',
  styleUrls: ['./pkd2-pokedex.component.scss']
})
export class Pkd2PokedexComponent {

  @Input() texts: Map<string, string>;
  @Input() currentPokemon: PokemonModel;
  
  @Output() private capture = new EventEmitter<void>();
  
  public showScreen: boolean = false;
  public destello: boolean = false;
  public PokedexEnum = PokedexEnum;

  private _c = 0;

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
}