import { inject } from "@angular/core";
import { TranslatorService } from "../translation/translator.service";

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  
  abstract initTranslate(): Map<string,string>;
}