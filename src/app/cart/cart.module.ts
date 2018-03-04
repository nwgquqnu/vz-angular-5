import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CartService } from '../services/cart.service';
import { LocalStorageService } from '../services/local-storage.service';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { CartRoutingModule } from './cart-routing.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [CartListComponent, CartItemComponent, CartNotificationComponent, OrderComponent],
  exports: [CartListComponent, CartNotificationComponent],
  providers: [CartService, LocalStorageService]
})
export class CartModule { }
