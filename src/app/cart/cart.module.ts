import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartListComponent, CartItemComponent],
  exports: [CartListComponent]
})
export class CartModule { }
