import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class PokeStoreService {

  public setItemSessionStorage(key:string, item:any):void {
    sessionStorage.setItem(key, item);
  }

  public getItemSessionStorage(key:string): string|null {
    return sessionStorage.getItem(key);
  }

  public removeSessionStorage(key:string): void {
    return sessionStorage.removeItem(key);
  }
}