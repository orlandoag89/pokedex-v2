import { NgModule } from "@angular/core";
import { RootPageComponent } from "./root-page/root-page.component";
import { CommonModule } from "@angular/common";
import { RootFacade } from "./root.facade";

@NgModule({
  declarations: [ RootPageComponent ],
  imports: [
    CommonModule
  ],
  exports: [ RootPageComponent ],
  providers: [
    RootFacade
  ]
})
export class RootModule { }