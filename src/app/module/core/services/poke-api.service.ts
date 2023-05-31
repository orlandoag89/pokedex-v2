import {Injectable,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paths } from './enums/paths.enum'
import { PokeApiEnum } from './enums/pokeapi.enums'
import { PokemonResponseModel } from './models/pokemon-response.model';
import { Observable } from 'rxjs';
import { AbilityModel } from './models/ability.model';

@Injectable({ providedIn:'root' })
export class PokeApiService {

  private _httpClient: HttpClient = inject(HttpClient);

  public geAlltPokemons():Observable<PokemonResponseModel> {
    const url = `${Paths.POKE_API_V2}?${Paths.LIMIT}=${PokeApiEnum.LIMIT}&${Paths.LIMIT}=${PokeApiEnum.OFFSET}`;
    return this._httpClient.get<PokemonResponseModel>(url);
  }

  public getPokemon(url:string): Observable<AbilityModel> {
    return this._httpClient.get<AbilityModel>(url);
  }
}