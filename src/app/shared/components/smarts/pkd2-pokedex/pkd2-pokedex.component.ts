import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pkd2-pokedex',
  templateUrl: './pkd2-pokedex.component.html',
  styleUrls: ['./pkd2-pokedex.component.scss']
})
export class Pkd2PokedexComponent {

  public showScreen: boolean = false;

  @Output()
  private capture = new EventEmitter<void>();

  openScreen(): void {
    this.capture.emit();
    this.showScreen = !this.showScreen;
  }
}
