import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CapturedPokemonsPageComponent } from "./captured-pokemons-page/captured-pokemons-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CapturedPokemonsPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CapturedPokemonsRoutingModule { }