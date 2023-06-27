import { Injectable, ViewContainerRef } from "@angular/core";
import { PokeDialogComponent } from "./poke-dialog/poke-dialog.component";
import { IDialog } from "./dialog.interface";

@Injectable()
export class PokeDialogService {

  private _viewContainerRef: ViewContainerRef;

  set viewContainerRef(v: ViewContainerRef) {
    this._viewContainerRef = v;
  }

  get viewContainerRef() {
    return this._viewContainerRef;
  }

  public dialog<T>(dialogOptions: IDialog<T>):void {
    const dialog = this.viewContainerRef.createComponent(PokeDialogComponent);
    const {instance} = dialog;
    instance.title = dialogOptions.title;
    instance.dialogType = dialogOptions.type;
    instance.element = dialogOptions.element;
    instance.close = dialogOptions.closeOptions;
    instance.onClose$.subscribe(() => {
      if (dialogOptions.afterClose) {
        dialogOptions.afterClose();
      }
      this.viewContainerRef.clear();
    });
    instance.onClick$.subscribe((v?: T) => {
      if (dialogOptions.click) {
        dialogOptions.click(v);
      }
    })
    if (dialogOptions.options) {
      instance.options=dialogOptions.options;
    }
  }
}