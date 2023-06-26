import { Component, inject } from '@angular/core';
import { AppFacade } from './app.facade';
import { IPokeNavBar } from '@dumbs-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pokedex-v2';

  private _facade: AppFacade = inject(AppFacade);

  get links():IPokeNavBar[] {
    return this._facade.linkList as IPokeNavBar[];
  }

}
