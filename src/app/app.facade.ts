import { Injectable } from "@angular/core";
import { BaseFacade } from "@core/base-facade";
import { PokeErrors } from "@shared/enums";

@Injectable({ providedIn: 'root' })
export class AppFacade extends BaseFacade {
  
  override initTranslate(): Map<string, string> {
    throw Error(PokeErrors.METHOD_NOT_IMPLEMENTED);
  }
}