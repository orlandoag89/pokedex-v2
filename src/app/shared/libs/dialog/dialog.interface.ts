import { Type } from "@angular/core";

export interface IDialog<T> {
  title:string;
  type: 'dialog'|'confirm';
  closeOptions: ICloseOptions;
  element: Type<unknown>;
  options?:Object;
  click?:(arg?:T) => void;
  afterClose?: () => void;
}

interface ICloseOptions {
  text:string;
  visible:boolean;
}