import { Inject, Injectable } from '@angular/core';

import { AppConfig } from '../models/app-config';
import { APP_CONFIG } from '../my-config';

@Injectable()
export class ConfigOptionsService {

  constructor(@Inject(APP_CONFIG) private config: AppConfig) { }

  getCartStorageKey() {
    return this.config.cartKeyForLocalStorage;
  }

  getAppTitle() {
    return this.config.title;
  }

  getLogin() {
    return this.config.login;
  }

  getEmail() {
    return this.config.email;
  }
}
