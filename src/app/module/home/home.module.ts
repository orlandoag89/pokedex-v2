import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { CharacterModule } from "@smarts-components";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    CharacterModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }