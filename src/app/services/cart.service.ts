import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product';


@Injectable()
export class CartService {
  private channel = new Subject<{type: string, item: CartItem}>();
  public channel$ = this.channel.asObservable();

  private cartItems: Map<string, CartItem> = new Map<string, CartItem>();
  private cartItemsChannel = new BehaviorSubject(this.getItemsFromMap());
  public cartItemsChannel$ = this.cartItemsChannel.asObservable();
  constructor() { }

  addProduct(product: Product) {
    const existingItem = this.cartItems.get(product.name);
    if (existingItem) {
      this.updateItemQuantity(existingItem, existingItem.quantity + 1);
    } else {
      this.addItem(product);
    }
  }

  removeItem(item: CartItem) {
    if (this.cartItems.delete(item.product.name)) {
      this.channel.next({type: 'removed', item});
      this.cartItemsChannel.next(this.getItemsFromMap());
    }
  }

  updateItemQuantity(item: CartItem, quantity: number) {
    item.quantity = quantity;
    this.channel.next({type: 'updated quantity', item});
    this.cartItemsChannel.next(this.getItemsFromMap());
  }
  getTotalSum() {
    return this.total(this.getItemsFromMap().map(item => item.product.price * item.quantity));
  }

  getTotalItems() {
    return this.total(this.getItemsFromMap().map(item => item.quantity));
  }

  private addItem(product: Product) {
    const item = new CartItem(product);
    this.cartItems.set(product.name, item);
    this.channel.next({type: 'added', item});
    this.cartItemsChannel.next(this.getItemsFromMap());
  }

  private getItemsFromMap() {
      return Array.from(this.cartItems.values());
    }

  private total(items: number[]): number {
    return items.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

}
