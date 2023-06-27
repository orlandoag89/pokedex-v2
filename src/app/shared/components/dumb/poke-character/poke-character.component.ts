import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild, inject } from '@angular/core';
import { PokemonModel } from '@core/services';
import { PokePropsEnum } from '@shared/enums';
import { pokemonTypesColors } from '@shared/libs/dialog';

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
        const secondaryType = types[1]?pokemonTypesColors[types[1].type.name]:pokemonTypesColors.default;
        const mainType = pokemonTypesColors[name];
        this._renderer2.setStyle(this.imgChar.nativeElement, PokePropsEnum.BACKGROUND, `radial-gradient(${secondaryType} 33%, ${mainType} 33%)`);
        this._renderer2.setStyle(this.imgChar.nativeElement, PokePropsEnum.BACKGROUND_SIZE, '.5rem .5rem');
      }
    });
  }
}
