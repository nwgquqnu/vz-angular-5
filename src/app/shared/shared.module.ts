import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification/notification.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationComponent, OrderByPipe],
  exports: [NotificationComponent, OrderByPipe]
})
export class SharedModule { }
