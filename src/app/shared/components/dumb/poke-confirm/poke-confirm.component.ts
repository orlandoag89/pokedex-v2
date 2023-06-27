import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogAbstract } from '@shared/libs';
import { PokeConfirmModel } from './poke-confirm.model';

@Component({
  selector: 'poke-poke-confirm',
  templateUrl: './poke-confirm.component.html',
  styleUrls: ['./poke-confirm.component.scss']
})
export class PokeConfirmComponent extends DialogAbstract<PokeConfirmModel, boolean> {

  public data: PokeConfirmModel;

  public onClick$: Subject<boolean>;
}