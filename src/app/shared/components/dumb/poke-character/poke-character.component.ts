import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild, inject } from '@angular/core';
import { PokemonModel } from '@core/services';
import { PokePropsEnum } from '@shared/enums';

export const pokemonTypesColors: any = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F'
}
@Component({
  selector: 'poke-character',
  templateUrl: './poke-character.component.html',
  styleUrls: ['./poke-character.component.scss']
})
export class PokeCharacterComponent implements OnChanges {

  @ViewChild('image') private imgChar: ElementRef;

  @Input()
  public pokemon: PokemonModel;

  @Input()
  public showing: boolean;

  private _renderer2: Renderer2 = inject(Renderer2);

  ngOnChanges(changes: SimpleChanges): void {
    const {showing}=changes;
    const {types} = this.pokemon;
    setTimeout(() => {
      if (showing.currentValue) {
        const {name}=types[0].type;
        const secondaryType = types[1]?types[1].type.name:pokemonTypesColors.default;
        const mainType = pokemonTypesColors[name];        
        this._renderer2.setStyle(this.imgChar.nativeElement, PokePropsEnum.BACKGROUND, `radial-gradient(${secondaryType} 33%, ${mainType} 33%)`);
        this._renderer2.setStyle(this.imgChar.nativeElement, PokePropsEnum.BACKGROUND_SIZE, '.5rem .5rem');
      }
    });
  }
}
