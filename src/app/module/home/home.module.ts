import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }