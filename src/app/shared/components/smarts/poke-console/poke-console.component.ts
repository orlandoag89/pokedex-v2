import { Component, AfterViewInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DialogAbstract } from '@shared/libs';
import { PokeconsoleModel } from './poke-console.model';

@Component({
  selector: 'poke-console',
  templateUrl: './poke-console.component.html',
  styleUrls: ['./poke-console.component.scss']
})
export class PokeConsoleComponent extends DialogAbstract<string, PokeconsoleModel> implements AfterViewInit {
  
  public data: PokeconsoleModel;

  public onClick$: Subject<string>;

  ngAfterViewInit() {
    console.log(this.data);
  }
}
