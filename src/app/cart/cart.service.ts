import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable()
export class CartService {

  private cartProducts: Map<string, Product> = new Map<string, Product>();
  constructor() { }

  addProduct(product: Product) {
    this.cartProducts.set(product.name, product);
  }

  getProducts() {
    return Array.from(this.cartProducts.values());
  }

  removeProduct(product: Product) {
    this.cartProducts.delete(product.name);
  }
}
