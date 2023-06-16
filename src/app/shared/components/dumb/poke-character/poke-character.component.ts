import { Component, Input } from '@angular/core';
import { PokemonModel } from '@core/services';

@Component({
  selector: 'poke-character',
  templateUrl: './poke-character.component.html',
  styleUrls: ['./poke-character.component.scss']
})
export class PokeCharacterComponent {

  @Input()
  public pokemon: PokemonModel;

  @Input()
  public showing: boolean;
}
