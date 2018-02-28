import { Component, OnInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';

import { CartCountChangedEvent } from '../../models/cart-count-changed.event';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  @ViewChildren(CartItemComponent) itemComponents: QueryList<CartItemComponent>;

  cartItems: Array<CartItem>;
  private subscription: Subscription;

  sortField = 'product.name';
  sortAsc = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.cartItemsChannel$.subscribe((next) => this.cartItems = next);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get isSomethingInCart() {
    return this.cartItems.length > 0;
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

  onRemoveAll() {
    this.cartService.removeAllItems();
    // this.itemComponents.forEach(item => item.onRemoveFromCart());
  }

}
