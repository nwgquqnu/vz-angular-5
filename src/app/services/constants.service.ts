import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  readonly CONSTANTS = {
    app: 'Task5',
    ver: '1.01'
  };

}

export const constantsService = new ConstantsService();
