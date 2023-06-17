import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable, interval, take } from 'rxjs';
import { PokemonModel } from '@core/services';
import { PokePokedexComponent } from '@smarts-components';

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
    this._facade.openDialog('dialog', PokePokedexComponent, {pokemon: this.pokemonRandom$});
  }

  showCurrenPokemon() {
    interval(2000).pipe(take(1)).subscribe(() => this.showPokemon = true);
  }
}
