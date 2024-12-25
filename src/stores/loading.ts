import * as Rx from 'rxjs';

export const loading$: Rx.BehaviorSubject<string[]> = new Rx.BehaviorSubject<string[]>([]);

export const startLoading = (key: string) => {
  const array = loading$.getValue() as string[];
  loading$.next(array.concat([key]));
};

export const stopLoading = (key: string) => {
  const array = loading$.getValue() as string[];
  loading$.next(array.filter(o => o !== key));
};

export const closeLoading = () => {
  loading$.next([]);
};
