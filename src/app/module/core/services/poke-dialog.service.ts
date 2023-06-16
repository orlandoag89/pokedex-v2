import { Injectable, ViewContainerRef, inject } from "@angular/core";
import { PokeDialogComponent } from "../../../shared/components/dumb/poke-dialog";

@Injectable()
export class PokeDialogService {

  public open(viewContainerRef: ViewContainerRef) {
    viewContainerRef.createComponent(PokeDialogComponent);
  }
}