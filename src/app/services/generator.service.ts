import { Injectable, InjectionToken } from '@angular/core';

export const GeneratorService_L10 = new InjectionToken<any[]>('GeneratorService with length 10');

export function GeneratorServiceFactory(n: number) {
  return function(): GeneratorService {
    return new GeneratorService(n);
  };

}

export class GeneratorService {
  static readonly aUpperCharPos = 'A'.charCodeAt(0);
  static readonly aLowerCharPos = 'a'.charCodeAt(0);
    static randomChar(): string {
      const n = Math.floor(Math.random() * 62);
      if (n < 10) {
        return '' + n; // 0-9
      }
      if (n < 36) {
        return String.fromCharCode(n + GeneratorService.aUpperCharPos - 10); // A-Z
      }
      return String.fromCharCode(n + GeneratorService.aLowerCharPos - 36); // a-z
    }

    static randomString(L) {
      let str = '';
      while (str.length < L) {
        str += GeneratorService.randomChar();
      }
      return str;
    }
  constructor(private stringLengh: number) { }

  generateString() {
    return GeneratorService.randomString(this.stringLengh);
  }
}

