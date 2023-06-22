import { Component, Input, Renderer2, inject, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'poke-indicator',
  templateUrl: './poke-indicator.component.html',
  styleUrls: ['./poke-indicator.component.scss']
})
export class PokeIndicatorComponent implements OnChanges {

  private _renderer2: Renderer2 = inject(Renderer2);

  @ViewChild('indicator',{static:true}) indicator: ElementRef;

  @Input() light:string;

  @Input() border:string;

  @Input() size: 's'|'m'|'l';

  @Input() active:boolean;

  @Input() shadowColor:string;

  @Input() activeColor: string;

  ngOnChanges(change: SimpleChanges): void {
    const {active}=change;
    const {nativeElement}=this.indicator;
    if (active.currentValue){
      this._renderer2.setStyle(nativeElement, 'box-shadow', `0 0 1.2rem ${this.getShadow}`);
      this._renderer2.setStyle(nativeElement, 'background-color', this.getActiveColor)
    } else {
      this._renderer2.removeStyle(nativeElement, 'box-shadow');
      this._renderer2.setStyle(nativeElement, 'background-color', this.bgColor);
    }
  }

  get getShadow():string {
    return this.shadowColor ?? 'var(--steel-blue)';
  }

  get getActiveColor():string {
    return this.activeColor??'var(--deep-sky-blue)';
  }

  get getBorder():string {
    return this.border??'var(--snow)';
  }

  get bgColor():string{
    return this.light??'var(--steel-blue)';
  }

  get getSize(): string {
    const sizes = {
      s: '1rem',
      m: '2rem',
      l: '3rem'
    }
    return sizes[this.size]??sizes['m'];
  }
}