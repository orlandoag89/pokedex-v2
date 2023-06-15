import { NgModule } from '@angular/core';
import { Pkd2PokedexComponent } from './pkd2-pokedex.component';
import { CommonModule } from '@angular/common';
import { Pkd2CharacterModule } from '@dumbs-components';
import { DirectivesModule } from '@shared/directives';

@NgModule({
  declarations: [ Pkd2PokedexComponent ],
  imports: [
    CommonModule,
    Pkd2CharacterModule,
    DirectivesModule
  ],
  exports: [ Pkd2PokedexComponent ]
})
export class Pkd2PokedexModule { }