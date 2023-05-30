import { Injectable } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable, of } from 'rxjs';
import * as eslang from '../../../../assets/i18n/es.json';

@Injectable()
export class GetTransalte implements TranslateLoader {

  getTranslation(browserLang: string): Observable<any> {
    const languages: any = {
      'es': eslang
    }
    const lang = languages[browserLang];
    return of(lang);
  }
}