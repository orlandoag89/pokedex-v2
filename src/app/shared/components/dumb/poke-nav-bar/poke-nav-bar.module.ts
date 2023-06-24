import { NgModule } from "@angular/core";
import { PokeNavBarComponent } from "./poke-nav-bar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ PokeNavBarComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ PokeNavBarComponent ]
})
export class PokeNavBarModule { }