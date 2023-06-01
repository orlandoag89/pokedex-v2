import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from '@core/services';

@Component({
  selector: 'pkd2-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input()
  public pokemon: PokemonModel;

  @Input()
  public showing: boolean;
}
