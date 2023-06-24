import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dictionary',
    loadChildren: () => import('./module/dictionary/dictionary.module').then(m=>m.DictionaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
