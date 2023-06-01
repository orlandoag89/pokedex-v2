import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokeApiService } from "@core/services";
import { CharacterModule } from "@dumbs-components";
import { SpinnerModule } from "@dumbs-components";
import { HomePageComponent } from "./home-page/home-page.component";
import { Pkd2PokedexModule } from "@smarts-components";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    CharacterModule,
    SpinnerModule,
    Pkd2PokedexModule
  ],
  providers: [
    PokeApiService
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }