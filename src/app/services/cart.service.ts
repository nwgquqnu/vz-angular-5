import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product';


@Injectable()
export class CartService {

  private cartItems: Map<string, CartItem> = new Map<string, CartItem>();
  constructor() { }

  addProduct(product: Product) {
    this.cartItems.set(product.name, new CartItem(product));
  }

  getItems() {
    return Array.from(this.cartItems.values());
  }

  removeItem(item: CartItem) {
    this.cartItems.delete(item.product.name);
  }

  updateItemQuantity(item: CartItem, quantity: number) {
    item.quantity = quantity;
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
