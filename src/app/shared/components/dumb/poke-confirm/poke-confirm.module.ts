import { NgModule } from "@angular/core";
import { PokeConfirmComponent } from "./poke-confirm.component";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "@shared/directives";

@NgModule({
  declarations: [PokeConfirmComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [ PokeConfirmComponent]
})
export class PokeConfirmModule { }