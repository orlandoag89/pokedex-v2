import { Component, AfterViewInit } from '@angular/core';
import { Subject, interval, takeUntil, takeWhile } from 'rxjs';
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

  public destello: boolean = false;

  private _c = 0;
  private showScreen = false;

  ngAfterViewInit() {
    console.log(this.data);
  }

  openScreen(): void {
    this.showScreen = !this.showScreen;
    interval(200).pipe(
      takeWhile(() => this.showScreen && this._c <= 39)
    ).subscribe(() => {
      this.destello = !this.destello
      this._c++;
    });
  }
}
