import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PokemonModel } from '@core/services';

@Component({
  selector: 'pkd2-pokedex',
  templateUrl: './pkd2-pokedex.component.html',
  styleUrls: ['./pkd2-pokedex.component.scss']
})
export class Pkd2PokedexComponent {
  
  @Input()
  public currentPokemon: PokemonModel;
  
  @Output()
  public capture = new EventEmitter<void>();
  
  public showScreen: boolean = false;

  openScreen(): void {
    this.capture.emit();
    this.showScreen = !this.showScreen;
  }
}
