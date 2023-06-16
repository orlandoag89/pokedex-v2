import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PokemonModel } from '@core/services';
import { PokedexEnum } from '@shared/enums';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'poke-pokedex',
  templateUrl: './poke-pokedex.component.html',
  styleUrls: ['./poke-pokedex.component.scss']
})
export class PokePokedexComponent {

  @Input() texts: Map<string, string>;
  @Input() currentPokemon: PokemonModel;
  
  @Output() private capture = new EventEmitter<void>();
  
  public showScreen: boolean = false;
  public destello: boolean = false;
  public PokedexEnum = PokedexEnum;
  public status = true;

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

  turnOffPokedex():void {
    this.status = !this.status;
    this._c = 40;
  }

}