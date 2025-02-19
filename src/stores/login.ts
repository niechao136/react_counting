import * as Rx from 'rxjs';
import { storage } from '@/services';

export const _token: Rx.BehaviorSubject<Token.Info> = new Rx.BehaviorSubject<Token.Info>({});

export const initToken = async () => {
  const token = await storage.load<Token.Info>({ key: 'token' });
  if (token?.token) {
    _token.next(token);
  }
};

export const saveToken = async (token: Token.Info) => {
  await storage.save({ key: 'token', data: token });
  _token.next(token);
};

export const clearToken = async () => {
  await storage.remove({ key: 'token' });
  _token.next({});
};
