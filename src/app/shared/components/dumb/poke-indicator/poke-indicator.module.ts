import { NgModule } from "@angular/core";
import { PokeIndicatorComponent } from "./poke-indicator.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ PokeIndicatorComponent ],
  imports: [
    CommonModule
  ],
  exports: [ PokeIndicatorComponent ]
})
export class PokeIndicatorModule { }