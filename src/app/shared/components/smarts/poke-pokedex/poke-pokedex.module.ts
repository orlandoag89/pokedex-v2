import { NgModule } from '@angular/core';
import { PokePokedexComponent } from './poke-pokedex.component';
import { CommonModule } from '@angular/common';
import { PokeCharacterModule } from '@dumbs-components';
import { DirectivesModule } from '@shared/directives';

@NgModule({
  declarations: [ PokePokedexComponent ],
  imports: [
    CommonModule,
    PokeCharacterModule,
    DirectivesModule
  ],
  exports: [ PokePokedexComponent ]
})
export class PokePokedexModule { }