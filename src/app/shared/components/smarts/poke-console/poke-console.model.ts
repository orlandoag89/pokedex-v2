import { PokemonModel } from '@core/services';
import { Observable } from 'rxjs';

export interface PokeconsoleModel {
  pokemon$: Observable<PokemonModel>;
  isActive$: Observable<boolean>;
  showing:boolean;
}