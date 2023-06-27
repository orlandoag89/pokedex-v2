import { NgModule } from "@angular/core";
import { CapturedPokemonsPageComponent } from "./captured-pokemons-page/captured-pokemons-page.component";
import { CommonModule } from "@angular/common";
import { CapturedPokemonsRoutingModule } from "./captured-pokemons-routing.module";

@NgModule({
  declarations: [ CapturedPokemonsPageComponent ],
  imports: [
    CommonModule,
    CapturedPokemonsRoutingModule
  ],
  exports: [ CapturedPokemonsPageComponent ]
})
export class CapturedPokemonsModule { }