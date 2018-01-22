import { Component, OnInit } from '@angular/core';

import { CartCountChangedEvent } from '../../models/cart-count-changed.event';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  get cartItems() {
    return this.cartService.getItems();
  }

  get isSomethingInCart() {
    return this.cartService.getItems().length > 0;
  }

  get totalSum() {
    return this.cartService.getTotalSum();
  }

  get totalItems() {
    return this.cartService.getTotalItems();
  }

  onRemoveFromCart(cartItem: CartItem) {
    this.cartService.removeItem(cartItem);
  }

  onItemCountChanged(event: CartCountChangedEvent) {
    this.cartService.updateItemQuantity(event.item, event.newCount);
  }

}
