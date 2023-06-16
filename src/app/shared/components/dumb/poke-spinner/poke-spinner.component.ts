import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-spinner',
  templateUrl: './poke-spinner.component.html',
  styleUrls: ['./poke-spinner.component.scss']
})
export class PokeSpinnerComponent {

  @Input()
  public showing:boolean;
  
}