import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'pkd2-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public loading$: Observable<unknown>;

  private _facade: HomeFacade = inject(HomeFacade);

  ngOnInit(): void {
    console.log(this._facade.initTranslate());
    this.loading$ = this._facade.getLoading();
    this._facade.retrievePokemons().subscribe();
  }

}
