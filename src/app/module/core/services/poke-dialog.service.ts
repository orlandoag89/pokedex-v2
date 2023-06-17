import { Injectable, Type, ViewContainerRef } from "@angular/core";
import { PokeDialogComponent } from "@dumbs-components";

@Injectable()
export class PokeDialogService {

  private _viewContainerRef: ViewContainerRef;

  set viewContainerRef(v: ViewContainerRef) {
    this._viewContainerRef = v;
  }

  openDialog(type: 'dialog', element: Type<unknown>, options?:Object) {
    if (type === 'dialog') {
      const dialog = this._viewContainerRef.createComponent(PokeDialogComponent);
      const {instance} = dialog;
      instance.element = element;
      if (options) {
        instance.options=options;
      }
    }
  }
}