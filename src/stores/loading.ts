import * as Rx from 'rxjs';

export const _loading: Rx.BehaviorSubject<string[]> = new Rx.BehaviorSubject<string[]>([]);

export const startLoading = (key: string) => {
  const array = _loading.getValue() as string[];
  _loading.next(array.concat([key]));
};

export const stopLoading = (key: string) => {
  const array = _loading.getValue() as string[];
  _loading.next(array.filter(o => o !== key));
};

export const closeLoading = () => {
  _loading.next([]);
};
