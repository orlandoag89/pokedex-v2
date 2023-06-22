import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-line',
  templateUrl: './poke-line.component.html',
  styleUrls: ['./poke-line.component.scss']
})
export class PokeLineComponent { 

  @Input() width: string;

  get getWidth(): string {
    return this.width ?? '10rem';
  }
}