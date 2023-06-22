import { NgModule } from "@angular/core";
import { PokeConsoleComponent } from "./poke-console.component";
import { CommonModule } from "@angular/common";
import { PokeIndicatorModule } from "@dumbs-components";
import { DirectivesModule } from "@shared/directives";

@NgModule({
  declarations: [ PokeConsoleComponent ],
  imports: [
    CommonModule,
    PokeIndicatorModule,
    DirectivesModule
  ],
  exports: [ PokeConsoleComponent ]
})
export class PokeConsoleModule { }