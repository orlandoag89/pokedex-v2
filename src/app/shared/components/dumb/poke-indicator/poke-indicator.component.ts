import { Component, Input, Renderer2, inject, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { PokeColorsEnum, PokePropsEnum } from '@shared/enums';

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

  @Input() activeColor: string;

  ngOnChanges(change: SimpleChanges): void {
    const {active}=change;
    const {nativeElement}=this.indicator;
    if (active.currentValue){
      this._renderer2.setStyle(nativeElement, PokePropsEnum.BOX_SHADOW, `0 0 1.2rem ${this.getShadow}`);
      this._renderer2.setStyle(nativeElement, PokePropsEnum.BACKGROUND_COLOR, this.getActiveColor)
    } else {
      this._renderer2.removeStyle(nativeElement, PokePropsEnum.BOX_SHADOW);
      this._renderer2.setStyle(nativeElement, PokePropsEnum.BACKGROUND_COLOR, this.bgColor)
    }
  }

  get getShadow():string {
    return this.bgColor;
  }

  get getActiveColor():string {
    return this.light??PokeColorsEnum.DEEP_SKY_BLUE;
  }

  get getBorder():string {
    return this.border??PokeColorsEnum.SNOW;
  }

  get bgColor():string{
    return this.activeColor??PokeColorsEnum.STEEL_BLUE;
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