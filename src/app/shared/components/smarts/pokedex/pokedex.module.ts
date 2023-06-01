import { NgModule } from '@angular/core';
import { PokedexComponent } from './pokedex.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ PokedexComponent ],
  imports: [
    CommonModule
  ],
  exports: [ PokedexComponent ]
})
export class PokedexModule { }