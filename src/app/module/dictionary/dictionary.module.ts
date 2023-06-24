import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DictionaryPageComponent } from "./dictionary-page/dictionary-page.component";
import { DictionaryRoutingModule } from "./dictionary-routing.module";

@NgModule({
  declarations: [ DictionaryPageComponent ],
  imports: [
    CommonModule,
    DictionaryRoutingModule
  ],
  exports: [ DictionaryPageComponent ]
})
export class DictionaryModule { }