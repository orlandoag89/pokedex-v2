import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable, interval, take } from 'rxjs';
import { PokemonModel } from '@core/services';
import { PokePokedexComponent } from '@smarts-components';
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
    this._facade.retrievePokemons().subscribe();
    this.loading$ = this._facade.getLoading();
    this.pokemonRandom$ = this._facade.getRandomPokemon();
  }

  openPokedex(): void {
    this._facade.dialog(
      this.traduction.get(ValuesKeys.POKEDEX)!,
      'dialog',
      PokePokedexComponent,
      {pokemon: this.pokemonRandom$},
      undefined, 
      (arg?:any) => {
        console.log(arg);
      }
    );
  }
}
