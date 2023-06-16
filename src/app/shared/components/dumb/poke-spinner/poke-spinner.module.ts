import { NgModule } from "@angular/core";
import { PokeSpinnerComponent } from "./poke-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ PokeSpinnerComponent ],
  imports: [ 
    CommonModule
  ],
  exports: [ PokeSpinnerComponent ]
})
export class PokeSpinnerModule { }