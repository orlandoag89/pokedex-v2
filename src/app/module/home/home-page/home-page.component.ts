import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable } from 'rxjs';
import { PokemonModel } from '@core/services';
import { PokeConsoleComponent, PokePokedexComponent, PokePokedexEnum } from '@smarts-components';
import {ValuesKeys} from './../enums/values.keys';
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

  private _facade: HomeFacade = inject(HomeFacade);

  ngOnInit(): void {
    this.traduction=this._facade.initTranslate();
    this._facade.retrievePokemons$().subscribe();
    this.loading$ = this._facade.getLoading$();
    this.pokemonRandom$ = this._facade.getRandomPokemon$();
    this._facade.dialog(
      this.traduction.get(ValuesKeys.POKEDEX)!,
      'dialog',
      PokeConsoleComponent,
      {
        pokemon$: this.pokemonRandom$,
        isActive$: this._facade.pokeConsoleStatus$()
      },
    )
  }

  openPokedex(): void {
    this._facade.dialog(
      this.traduction.get(ValuesKeys.POKEDEX)!,
      'dialog',
      PokeConsoleComponent,
      {
        pokemon$: this.pokemonRandom$,
        isActive$: this._facade.pokeConsoleStatus$()
      },
      undefined, 
      (arg:PokePokedexEnum) => {
        if (arg === PokePokedexEnum.SHOW_POKEMON) {
          this.showPokemon = true
        }
        if (arg === PokePokedexEnum.ON_OFF) {
          this._facade.toggleConsoleStatus();
        }
      }
    );
  }
}
