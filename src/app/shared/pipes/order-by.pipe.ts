import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  static compare<T extends {[key: string]: T | T[] | string | number }, K extends keyof T>(a: T, b: T, sortPath: K[]): number {
    const valA = OrderByPipe.getProperty(a, sortPath);
    const valB = OrderByPipe.getProperty(b, sortPath);
    return valA > valB ? 1 :  valA < valB ? -1 : 0;
  }

  static getProperty<T>(obj: T, keyPath: any[]) {
    let realObj = obj;
    for (const key of keyPath) {
      realObj = realObj[key];
    }
    return realObj;
  }

  transform<T extends {[key: string]: T | T[] | string | number }, K extends keyof T>(array: T[], sortField: K, ascSort = false): any {
    const sortPath = sortField.split('.');
    return array.sort((a, b) => {
      let result = OrderByPipe.compare(a, b, sortPath);
      if (!ascSort) {
        result *= -1;
      }
      return result;
    });
  }

}
