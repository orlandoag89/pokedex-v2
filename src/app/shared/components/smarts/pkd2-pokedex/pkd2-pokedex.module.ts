import { NgModule } from '@angular/core';
import { Pkd2PokedexComponent } from './pkd2-pokedex.component';
import { CommonModule } from '@angular/common';
import { PokeCharacterModule } from '@dumbs-components';
import { DirectivesModule } from '@shared/directives';

@NgModule({
  declarations: [ Pkd2PokedexComponent ],
  imports: [
    CommonModule,
    PokeCharacterModule,
    DirectivesModule
  ],
  exports: [ Pkd2PokedexComponent ]
})
export class Pkd2PokedexModule { }