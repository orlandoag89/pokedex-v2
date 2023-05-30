import { BehaviorSubject, Observable } from "rxjs";

export abstract class Translation {

  protected readonly _tokens$ = new BehaviorSubject<any[]>([]);

  private _page:string;

  public abstract doTranslate(page:string, values:string[]): Map<string,string>;

  protected abstract translate(): Observable<any>;

  set page(p:string){
    this._page = p;
  }

  get page() {
    return this._page;
  }
}