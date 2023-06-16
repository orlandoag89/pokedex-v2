import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokeCharacterComponent } from "./poke-character.component";

@NgModule({
  declarations: [ PokeCharacterComponent ],
  imports: [ 
    CommonModule
  ],
  exports: [ PokeCharacterComponent ]
})
export class PokeCharacterModule { }