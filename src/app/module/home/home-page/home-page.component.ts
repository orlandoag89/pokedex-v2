import { Component, OnInit, inject } from '@angular/core';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'pkd2-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private _facade: HomeFacade = inject(HomeFacade);

  ngOnInit(): void {
    console.log(this._facade.initTranslate());
    
  }

}
