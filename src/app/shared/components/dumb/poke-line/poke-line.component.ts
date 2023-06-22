import { Component, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'poke-line',
  templateUrl: './poke-line.component.html',
  styleUrls: ['./poke-line.component.scss']
})
export class PokeLineComponent implements AfterViewInit {

  @ViewChild('line', {static:true}) line: ElementRef;

  @Input() width: string;

  private _renderer2: Renderer2 = inject(Renderer2);

  ngAfterViewInit(): void {
    this._renderer2.setStyle(this.line.nativeElement, 'width', this.getWidth)
  }
  
  get getWidth(): string {
    return this.width ?? '10rem';
  }
}