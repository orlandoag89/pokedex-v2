import { NgModule } from '@angular/core';
import { PokeDialogComponent } from './poke-dialog.component';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '@shared/directives';

@NgModule({
  declarations: [ PokeDialogComponent ],
  imports: [
    CommonModule
  ],
  exports: [ PokeDialogComponent ]
})
export class PokeDialogModule { }