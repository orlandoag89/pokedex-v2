import {Injectable,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paths } from './enums/paths.enum'
import { PokeApiEnum } from './enums/pokeapi.enums'
import { PokemonResponseModel } from './models/pokemon-response.model';
import { Observable } from 'rxjs';
import { PokemonModel } from './models/pokemon.model';

@Injectable({ providedIn:'root' })
export class PokeApiService {

  private _httpClient: HttpClient = inject(HttpClient);

  public geAlltPokemons(offset:string):Observable<PokemonResponseModel> {
    const url = `${Paths.POKE_API_V2}?${Paths.LIMIT}=${PokeApiEnum.LIMIT}&${Paths.OFFSET}=${offset}`;
    return this._httpClient.get<PokemonResponseModel>(url);
  }

  public getPokemon(url:string): Observable<PokemonModel> {
    return this._httpClient.get<PokemonModel>(url);
  }

  public getPokemonById(id: number): Observable<PokemonModel> {
    const url = `${Paths.POKE_API_V2}/${id}`;
    return this._httpClient.get<PokemonModel>(url);
  }
}