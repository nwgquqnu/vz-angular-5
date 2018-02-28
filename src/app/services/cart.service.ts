import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product';
import { LocalStorageService } from './local-storage.service';
import { ConfigOptionsService } from './config-options.service';


@Injectable()
export class CartService {
  private channel = new Subject<{type: string, item?: CartItem}>();
  public channel$ = this.channel.asObservable();

  private cartItems: Map<string, CartItem> = new Map<string, CartItem>();
  private cartItemsChannel = new BehaviorSubject(this.getItemsFromMap());
  public cartItemsChannel$ = this.cartItemsChannel.asObservable();

  private totalSum: number;
  private totalQuantity: number;
  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptions: ConfigOptionsService,
  ) {
    if (!(localStorageService && configOptions)) {
      console.log('CartService: LocalStorageService and/or ConfigOptionsService not found. Skipping initialization',
       localStorageService, configOptions);
      return;
    }
    const storageConfig: [string, CartItem][] = localStorageService.getItem(configOptions.getCartStorageKey());
    this.cartItems = new Map<string, CartItem>(storageConfig);
    this.updateTotalsAndChannels('initialized from local storage');
   }

  addProduct(product: Product, quantity: number = 1) {
    if (quantity < 1) {
      return;
    }

    const existingItem = this.cartItems.get(product.name);
    if (existingItem) {
      this.updateItemQuantity(existingItem, existingItem.quantity + quantity);
    } else {
      this.addItem(product, quantity);
    }
  }

  removeItem(item: CartItem) {
    if (this.cartItems.delete(item.product.name)) {
      this.updateTotalsAndChannels('removed', item);
    }
  }

  removeAllItems() {
    this.cartItems.clear();
    this.updateTotalsAndChannels('removed all items');
  }

  updateItemQuantity(item: CartItem, quantity: number) {
    const storedItem = this.cartItems.get(item.product.name);
    if (storedItem) {
      storedItem.quantity = quantity;
      this.updateTotalsAndChannels('updated quantity', item);
    }
  }
  getTotalSum() {
    return this.totalSum;
  }

  getTotalItems() {
    return this.totalQuantity;
  }

  private addItem(product: Product, quantity: number) {
    const item = new CartItem(product, quantity);

    this.cartItems.set(product.name, item);
    this.updateTotalsAndChannels('added', item);
  }

  private getItemsFromMap() {
      return Array.from(this.cartItems.values());
    }

  private updateTotals() {
    let sum = 0;
    let quantity = 0;
    this.cartItems.forEach(item => {
      sum += item.product.price * item.quantity;
      quantity += item.quantity;
     });
     this.totalQuantity = quantity;
     this.totalSum = sum;
  }

  private updateTotalsAndChannels(type: string, item?: CartItem) {
    this.updateTotals();
    this.updateLocalStorage();
    this.channel.next({type, item});
    this.cartItemsChannel.next(this.getItemsFromMap());
  }

  private updateLocalStorage() {
    if (this.localStorageService && this.configOptions) {
      this.localStorageService.setItem(this.configOptions.getCartStorageKey(), Array.from(this.cartItems));
    }
  }

}
