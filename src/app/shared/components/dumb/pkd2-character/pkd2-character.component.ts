import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from '@core/services';

@Component({
  selector: 'pkd2-character',
  templateUrl: './pkd2-character.component.html',
  styleUrls: ['./pkd2-character.component.scss']
})
export class Pkd2CharacterComponent {

  @Input()
  public pokemon: PokemonModel;

  @Input()
  public showing: boolean;
}
