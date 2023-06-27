import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable } from 'rxjs';
import { PokemonModel } from '@core/services';
import { PokeConsoleComponent, PokeConsoleEnum, } from '@smarts-components';
import {ValuesKeys} from './../enums/values.keys';
import { pokemonTypesColors } from '@shared/libs';

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

  ngOnInit(): void {
    this.traduction=this._facade.initTranslate();
    this._facade.retrievePokemons$().subscribe();
    this.loading$ = this._facade.getLoading$();
    this.pokemonRandom$ = this._facade.getRandomPokemon$();
  }

  public openPokeConsole():void {
    this._facade.dialog<PokeConsoleEnum>(
      this.traduction.get(this.ValuesKeys.POKEDEX)!,
      'dialog',
      {
        text: this._facade.config.DIALOG_CLOSE,
        visible: true
      },
      PokeConsoleComponent,
      {
        pokemon$: this.pokemonRandom$,
        isActive$: this._facade.pokeConsoleStatus$(),
        showing: this.showPokemon
      },
      args => {
        if (args === PokeConsoleEnum.SHOW_POKEMON) {
          this.showPokemon = true;
        }
      }
    )
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
