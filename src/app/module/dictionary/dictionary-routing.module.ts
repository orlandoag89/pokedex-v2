import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DictionaryPageComponent } from "./dictionary-page/dictionary-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DictionaryPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }