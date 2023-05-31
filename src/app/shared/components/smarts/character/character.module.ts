import { NgModule } from "@angular/core";
import { CharacterComponent } from "./character.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ CharacterComponent ],
  imports: [ 
    CommonModule
  ],
  exports: [ CharacterComponent ]
})
export class CharacterModule { }