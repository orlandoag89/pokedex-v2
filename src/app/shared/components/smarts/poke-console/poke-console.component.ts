import { Component, AfterViewInit } from '@angular/core';
import { Subject, interval, takeWhile } from 'rxjs';
import { DialogAbstract } from '@shared/libs/dialog';
import { PokeconsoleModel } from './poke-console.model';
import { PokeColorsEnum } from '@shared/enums';
import { PokeConsoleEnum } from './poke-console.enum';

@Component({
  selector: 'poke-console',
  templateUrl: './poke-console.component.html',
  styleUrls: ['./poke-console.component.scss']
})
export class PokeConsoleComponent extends DialogAbstract<PokeconsoleModel, string> implements AfterViewInit {
  
  public data: PokeconsoleModel;

  public onClick$: Subject<string>;

  public destello: boolean = false;
  public showScreen:boolean;
  public PokeColors = PokeColorsEnum;

  private _c = 0;

  ngAfterViewInit(): void {
    this.showScreen = this.data.showing;
  }

  openScreen(): void {
    this.onClick$.next(PokeConsoleEnum.SHOW_POKEMON);
    if (!this.showScreen) {
      this.showScreen = !this.showScreen;
      interval(200).pipe(
        takeWhile(() => this.showScreen && this._c <= 39)
      ).subscribe(() => {
        this.destello = !this.destello
        this._c++;
      });
    }
  }
}
