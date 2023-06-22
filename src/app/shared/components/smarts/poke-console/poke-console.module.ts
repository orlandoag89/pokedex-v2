import { NgModule } from "@angular/core";
import { PokeConsoleComponent } from "./poke-console.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ PokeConsoleComponent ],
  imports: [
    CommonModule
  ],
  exports: [ PokeConsoleComponent ]
})
export class PokeConsoleModule { }