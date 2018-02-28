import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  readonly CONSTANTS = {
    app: 'Task3',
    ver: '1.0'
  };

}

export const constantsService = new ConstantsService();
