import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable, tap } from 'rxjs';
import { PokemonModel } from '@core/services';
import { PokeConsoleComponent, PokeConsoleEnum, } from '@smarts-components';
import {ValuesKeys} from './../enums/values.keys';
import { pokemonTypesColors } from '@shared/libs/dialog';

@Component({
  selector: 'pkd2-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public loading$: Observable<boolean>;
  public pokemonRandom$: Observable<PokemonModel>;
  public showPokemon:boolean;
  public traduction: Map<string, string>;
  public ValuesKeys = ValuesKeys;

  private _facade: HomeFacade = inject(HomeFacade);
  private _length: number;

  ngOnInit(): void {
    this.traduction=this._facade.initTranslate();
    this._facade.lengthPokemons$().subscribe(l => this._length = l);
    if (this._length < 30) {
      this._facade.retrievePokemons$().subscribe();
    }
    this.loading$ = this._facade.loading$;
    this.pokemonRandom$ = this._facade.getRandomPokemon$();
  }

  public openPokeConsole():void {
    this._facade.dialog<PokeConsoleEnum>({
      title: this.traduction.get(this.ValuesKeys.POKEDEX)!,
      type: 'dialog',
      closeOptions: {
        text: this._facade.config.DIALOG_CLOSE,
        visible: true
      },
      element: PokeConsoleComponent,
      options: {
        pokemon$: this.pokemonRandom$,
        isActive$: this._facade.pokeConsoleStatus$,
        showing: this.showPokemon
      },
      click: args => {
        if (args === PokeConsoleEnum.SHOW_POKEMON) {
          this.showPokemon = true;
        }
      }
    });
  }

  public realodPokemon():void {
    this._facade.initLoader();
    this.showPokemon=false;
    this.pokemonRandom$ = this._facade.getRandomPokemon$();
    this._facade.onFinishLoaderByTime(1000);
  }

  public getColorByType(type:string) {
    return pokemonTypesColors[type];
  }

  public capturePokemon(currentPokemon: PokemonModel) {
    this._facade.capturePokemon(currentPokemon);
  }
}
