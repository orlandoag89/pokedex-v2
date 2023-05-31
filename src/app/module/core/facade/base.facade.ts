import { inject } from "@angular/core";
import { TranslatorService } from "@core/translator";

export abstract class BaseFacade {

  protected readonly translation: TranslatorService = inject(TranslatorService);
  
  abstract initTranslate(): Map<string,string>;
}