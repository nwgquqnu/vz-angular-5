import { Injectable } from '@angular/core';

type SimpleObject<T> = {
  [P in keyof T]: T | string | number;
};

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem<K, T extends [string, SimpleObject<K>][] > (key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem<K, T extends [string, SimpleObject<K>][]>(key: string): T {
    return <T>JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
