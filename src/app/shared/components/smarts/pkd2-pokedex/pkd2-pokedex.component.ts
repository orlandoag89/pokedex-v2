import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd2-pokedex',
  templateUrl: './pkd2-pokedex.component.html',
  styleUrls: ['./pkd2-pokedex.component.scss']
})
export class Pkd2PokedexComponent implements OnInit {

  public showScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
