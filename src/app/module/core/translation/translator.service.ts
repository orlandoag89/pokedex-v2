import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Translation } from "./translation";
import { EMPTY, Observable } from "rxjs";

@Injectable()
export class TranslatorService extends Translation {

  private readonly _translateService: TranslateService = inject(TranslateService);

  constructor() {
    super();
    this.loadLaguage();
  }

  public override doTranslate(page: string, values: string[]): Map<string, string> {
    this.page = page;
    this._tokens$.next([...this._tokens$.value, ...values]);
    return new Map<string, string>;
  }

  protected override translate(): Observable<any> {
    this._tokens$.subscribe(console.log);
      return EMPTY;
  }

  private loadLaguage():void{
    const lang = this._translateService.getBrowserLang()||'es';
    this._translateService.addLangs([lang]);
    this._translateService.setDefaultLang(lang);
  }
}