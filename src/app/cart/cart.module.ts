import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CartListComponent, CartItemComponent, CartNotificationComponent],
  exports: [CartListComponent, CartNotificationComponent]
})
export class CartModule { }
