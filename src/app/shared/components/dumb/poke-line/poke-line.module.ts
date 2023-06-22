import { NgModule } from "@angular/core";
import { PokeLineComponent } from "./poke-line.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ PokeLineComponent ],
  imports: [
    CommonModule
  ],
  exports: [ PokeLineComponent ]
})
export class PokeLineModule { }