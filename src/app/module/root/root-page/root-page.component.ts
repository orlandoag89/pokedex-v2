import { Component, OnInit, ViewContainerRef, inject } from '@angular/core';
import { RootFacade } from '../root.facade';

@Component({
  selector: 'poke-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.scss']
})
export class RootPageComponent implements OnInit {

  private _facade: RootFacade = inject(RootFacade);
  private _viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

  ngOnInit(): void {
    this._facade.setViewContainerRef(this._viewContainerRef);
  }

}
