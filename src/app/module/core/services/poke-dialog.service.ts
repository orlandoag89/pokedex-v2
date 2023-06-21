import { Injectable, Type, ViewContainerRef } from "@angular/core";
import { PokeDialogComponent } from "@dumbs-components";

@Injectable()
export class PokeDialogService {

  private _viewContainerRef: ViewContainerRef;

  set viewContainerRef(v: ViewContainerRef) {
    this._viewContainerRef = v;
  }

  dialog(
    title: string, 
    type: 'dialog', 
    element: Type<unknown>, 
    options?:Object, 
    afterClose?: () => void, 
    click?: (arg?:any) => void
  ) {
    if (type === 'dialog') {      
      const dialog = this._viewContainerRef.createComponent(PokeDialogComponent);
      const {instance} = dialog;
      instance.element = element;
      instance.title = title;
      instance.onClose$.subscribe(() => {
        if (afterClose) {
          afterClose();
        }
        this._viewContainerRef.clear();
      });
      instance.onClick$.subscribe((v?: any) => {
        if (click) {
          click(v);
        }
      })
      if (options) {
        instance.options=options;
      }
    }
  }
}