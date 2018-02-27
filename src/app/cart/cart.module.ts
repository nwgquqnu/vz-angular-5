import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartService } from '../services/cart.service';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [CartListComponent, CartItemComponent, CartNotificationComponent],
  exports: [CartListComponent, CartNotificationComponent],
  providers: [CartService]
})
export class CartModule { }
