import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokeCharacterModule, PokeDialogModule, PokeSpinnerModule } from "@dumbs-components";
import { HomePageComponent } from "./home-page/home-page.component";
import { DirectivesModule } from "@shared/directives";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    PokeCharacterModule,
    PokeSpinnerModule,
    PokeDialogModule,
    DirectivesModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }