import { Subject } from 'rxjs';

export abstract class DialogAbstract<I, O> { 

  public abstract data: I;

  public abstract onClick$: Subject<O>
}