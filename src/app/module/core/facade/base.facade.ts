import { inject } from "@angular/core";
import { TranslatorService } from "@core/translator";
import { PokeApiService } from "@core/services";
import { concatMap, map, mergeMap, switchMap } from "rxjs";
import { PokemonResultModel } from "../services/models/pokemon-result.model";

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  
  private readonly pokeApi: PokeApiService = inject(PokeApiService);
  
  abstract initTranslate(): Map<string,string>;

  public retrievePokemons() {
    return this.pokeApi.geAlltPokemons().pipe(
      switchMap(v => v.results),
      map(p => this.pokeApi.getPokemon(p.url)),
      mergeMap(v => v)
    );
  }
}