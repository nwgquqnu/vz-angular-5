import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CartService {
  private channel = new Subject<{type: string, item: CartItem}>();
  public channel$ = this.channel.asObservable();

  private cartItems: Map<string, CartItem> = new Map<string, CartItem>();
  constructor() { }

  addProduct(product: Product) {
    const item = new CartItem(product);
    this.cartItems.set(product.name, item);
    this.channel.next({type: 'added', item});
  }

  getItems() {
    return Array.from(this.cartItems.values());
  }

  removeItem(item: CartItem) {
    if (this.cartItems.delete(item.product.name)) {
      this.channel.next({type: 'removed', item});
    }

  }

  updateItemQuantity(item: CartItem, quantity: number) {
    item.quantity = quantity;
    this.channel.next({type: 'updated quantity', item});
  }

  getTotalSum() {
    return this.total(this.getItems().map(item => item.product.price * item.quantity));
  }

  getTotalItems() {
    return this.total(this.getItems().map(item => item.quantity));
  }

  private total(items: number[]): number {
    return items.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

}
