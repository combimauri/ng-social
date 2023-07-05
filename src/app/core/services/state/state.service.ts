import { BehaviorSubject, Observable, map } from 'rxjs';

export abstract class StateService<T> {
  private state$: BehaviorSubject<T> | null = null;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> | undefined {
    return this.state$?.pipe(map((state) => mapFn(state)));
  }

  protected setState(newState: Partial<T>): void {
    this.state$?.next({ ...this.state$.getValue(), ...newState });
  }
}
