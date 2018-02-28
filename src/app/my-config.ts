import { InjectionToken } from '@angular/core';

import { AppConfig } from './models/app-config';

export const APP_CONFIG = new InjectionToken<string>('app-config');
export const myConfig: AppConfig = {
    title: 'Angular5 Shop',
    cartKeyForLocalStorage: 'cartData',
    login: 'Some User',
    id: 24,
    email: 'some.user@example.com'
};
