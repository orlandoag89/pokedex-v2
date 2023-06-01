import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PokeApiService } from "@core/services";
import { CharacterModule } from "@smarts-components";
import { SpinnerModule } from "@dumb-components";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    CharacterModule,
    SpinnerModule
  ],
  providers: [
    PokeApiService
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }