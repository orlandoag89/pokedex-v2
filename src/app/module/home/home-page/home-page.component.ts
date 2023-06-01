import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable } from 'rxjs';
import { PokemonModel } from '../../core/services/models';

@Component({
  selector: 'pkd2-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public loading$: Observable<boolean>;
  public pokemonRandom$: Observable<PokemonModel>;
  public showPokemon:boolean;

  private _facade: HomeFacade = inject(HomeFacade);

  ngOnInit(): void {
    console.log(this._facade.initTranslate());
    this._facade.retrievePokemons().subscribe();
    this.loading$ = this._facade.getLoading();
    this.pokemonRandom$ = this._facade.getRandomPokemon();
  }

}
