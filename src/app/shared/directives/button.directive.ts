import { Directive, ElementRef, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { PokeEventsEnum } from '@shared/enums';
import { Subject, fromEvent, takeUntil } from 'rxjs';
@Directive({
  selector: '[poke-button]'
})
export class ButtonDirective implements OnInit, OnDestroy {

  private _destroy$ = new Subject<void>();
  private _elementRef: ElementRef = inject(ElementRef);
  private _renderer2: Renderer2 = inject(Renderer2);

  ngOnInit(): void {
    const {nativeElement}=this._elementRef;
    this._addEvent(nativeElement, PokeEventsEnum.ON_MOUSE_DOWN).pipe(
      takeUntil(this._destroy$)
    ).subscribe(() => this._renderer2.addClass(nativeElement, 'poke-general-shadow'));
    this._addEvent(nativeElement, PokeEventsEnum.ON_MOUSE_UP).pipe(
      takeUntil(this._destroy$)
    ).subscribe(() => this._renderer2.removeClass(nativeElement, 'poke-general-shadow'));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  private _addEvent(target: any, e: PokeEventsEnum) {
    return fromEvent(target, e);
  }
}