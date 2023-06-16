import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { PokeEventsEnum } from '../enums/poke-events.enum';
import { Subject, fromEvent, takeUntil } from 'rxjs';
@Directive({
  selector: '[poke-button]'
})
export class ButtonDirective implements OnInit, OnDestroy {

  @Input()
  set lightMode(v: boolean) {
    this.mode = v ? '--light': '--dark';
  }
  private _destroy$ = new Subject<boolean>();
  
  private _elementRef: ElementRef = inject(ElementRef);
  private _renderer2: Renderer2 = inject(Renderer2);
  private mode = '--dark';

  ngOnInit(): void {
    const {nativeElement}=this._elementRef;
    this._addEvent(nativeElement, PokeEventsEnum.ON_MOUSE_DOWN).pipe(
      takeUntil(this._destroy$)
    ).subscribe(() => this._toggle(nativeElement, `poke-general-shadow${this.mode}`));
    this._addEvent(nativeElement, PokeEventsEnum.ON_MOUSE_UP).pipe(
      takeUntil(this._destroy$)
    ).subscribe(() => this._toggle(nativeElement, `poke-general-shadow${this.mode}`));
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  private _addEvent = (target: any, e: PokeEventsEnum) => fromEvent(target, e);

  private _toggle = (target: any, clazz: string) => {
    if (!target.classList.contains(clazz)) {
      this._renderer2.addClass(target, clazz);
      return;
    }
    this._renderer2.removeClass(target, clazz);
  }
}