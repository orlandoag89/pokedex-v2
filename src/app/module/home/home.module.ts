import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokeApiService } from "@core/services";
import { PokeCharacterModule, PokeDialogModule, PokeSpinnerModule } from "@dumbs-components";
import { HomePageComponent } from "./home-page/home-page.component";
import { PokePokedexModule } from "@smarts-components";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    PokeCharacterModule,
    PokeSpinnerModule,
    PokePokedexModule,
    PokeDialogModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }