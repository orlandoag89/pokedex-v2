import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { CharacterModule } from "@smarts-components";
import { PokeApiService } from "@core/services";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    CharacterModule
  ],
  providers: [
    PokeApiService
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }