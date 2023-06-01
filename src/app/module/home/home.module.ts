import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokeApiService } from "@core/services";
import { CharacterModule } from "@dumbs-components";
import { SpinnerModule } from "@dumbs-components";
import { PokedexModule } from "@smarts-components";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    CharacterModule,
    SpinnerModule,
    PokedexModule
  ],
  providers: [
    PokeApiService
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }