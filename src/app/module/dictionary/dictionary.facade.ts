import { Injectable } from "@angular/core";
import { BaseFacade } from "@core/base-facade";

@Injectable({providedIn:'root'})
export class DictionaryFacade extends BaseFacade {

  override initTranslate(): Map<string, string> {
    return new Map<string, string>;
  }
}