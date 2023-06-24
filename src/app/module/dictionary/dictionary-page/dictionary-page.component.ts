import { Component, OnInit, inject } from '@angular/core';
import { DictionaryFacade } from '../dictionary.facade';

@Component({
  selector: 'poke-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent {

  private _facade: DictionaryFacade = inject(DictionaryFacade);
}