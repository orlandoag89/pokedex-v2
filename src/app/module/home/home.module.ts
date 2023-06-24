import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokeCharacterModule, PokeSpinnerModule } from "@dumbs-components";
import { HomePageComponent } from "./home-page/home-page.component";
import { DirectivesModule } from "@shared/directives";
import { PokeDialogModule } from "@shared/libs";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PokeCharacterModule,
    PokeSpinnerModule,
    PokeDialogModule,
    DirectivesModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }