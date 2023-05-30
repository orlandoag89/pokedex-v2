import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Translation } from "./translation";
import { Observable, Subject, map, switchMap, takeUntil } from "rxjs";
import { TranslationEnum } from "./enums/translation.enums";

@Injectable({providedIn: 'root'})
export class TranslatorService extends Translation {

  private readonly _translateService: TranslateService = inject(TranslateService);
  private readonly _destroy$ = new Subject<boolean>();
  private words:any[];

  constructor() {
    super();
    this.loadLaguage();
  }

  public override doTranslate(page: string, values: string[]): Map<string, string> {
    this.page = page;
    this._tokens$.next([...this._tokens$.value, ...values]);
    const mapa = new Map<string, string>();
    this.translate().pipe(
      map(v => mapa.set(v.key, v.value)),
      takeUntil(this._destroy$)
    ).subscribe(() => {
      if (values.length === mapa.size) {
        this._destroy$.next(true);
        this._destroy$.complete();
        this._destroy$.unsubscribe();
      }
    });
    return mapa;
  }

  protected override translate(): Observable<any> {
    this.words=[];
    let c = 0;

    const traductor$ = (k:string) => {
      const key = `${TranslationEnum.PAGE}${this.page}.${TranslationEnum.PROP}${k}`;
      const value =this._translateService.get(key);
      const word = {
        key: k
      }
      this.words.push(word);
      return value;
    }

    const addValue$ = (value:any) => {
      const props = {
        ...this.words[c],
        value
      }
      c++;
      return props;
    }

    return this._tokens$.pipe(
      switchMap(r => r),
      map(traductor$),
      switchMap(v=>v),
      map(addValue$),
      takeUntil(this._destroy$)
    );
  }

  private loadLaguage():void{
    const lang = this._translateService.getBrowserLang()||'es';
    this._translateService.addLangs([lang]);
    this._translateService.setDefaultLang(lang);
  }
}