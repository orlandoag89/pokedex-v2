import { Subject } from 'rxjs';

export abstract class DialogAbstract<T, D> { 

  public abstract data: D;

  public abstract onClick$: Subject<T>
}