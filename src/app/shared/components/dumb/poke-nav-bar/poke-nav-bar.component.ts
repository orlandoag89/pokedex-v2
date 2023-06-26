import { Component, Input } from '@angular/core';
import { IPokeNavBar } from './poke-nav-bar.interface';

@Component({
  selector: 'poke-nav-bar',
  templateUrl: './poke-nav-bar.component.html',
  styleUrls: ['./poke-nav-bar.component.scss']
})
export class PokeNavBarComponent {

  @Input() links: IPokeNavBar[];
}