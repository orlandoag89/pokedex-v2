import { NgModule } from "@angular/core";
import { PokeConsoleComponent } from "./poke-console.component";
import { CommonModule } from "@angular/common";
import { PokeIndicatorModule } from "@dumbs-components";

@NgModule({
  declarations: [ PokeConsoleComponent ],
  imports: [
    CommonModule,
    PokeIndicatorModule
  ],
  exports: [ PokeConsoleComponent ]
})
export class PokeConsoleModule { }