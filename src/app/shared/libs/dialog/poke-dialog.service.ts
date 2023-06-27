import { Injectable, Type, ViewContainerRef } from "@angular/core";
import { PokeDialogComponent } from "./poke-dialog/poke-dialog.component";

@Injectable()
export class PokeDialogService {

  private _viewContainerRef: ViewContainerRef;

  set viewContainerRef(v: ViewContainerRef) {
    this._viewContainerRef = v;
  }

  get viewContainerRef() {
    return this._viewContainerRef;
  }

  public dialog<T>(
    title: string, 
    type: 'dialog'|'confirm', 
    closeOptions: {
      text:string,
      visible: boolean
    },
    element: Type<unknown>, 
    options?:Object, 
    click?: (arg?:T) => void,
    afterClose?: () => void,
  ):void {
    const dialog = this.viewContainerRef.createComponent(PokeDialogComponent);
    const {instance} = dialog;
    instance.title = title;
    instance.dialogType = type;
    instance.element = element;
    instance.close = closeOptions;
    instance.onClose$.subscribe(() => {
      if (afterClose) {
        afterClose();
      }
      this.viewContainerRef.clear();
    });
    instance.onClick$.subscribe((v?: T) => {
      if (click) {
        click(v);
      }
    })
    if (options) {
      instance.options=options;
    }
  }
}