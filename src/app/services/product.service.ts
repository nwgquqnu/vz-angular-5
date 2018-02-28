import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Category } from '../models/category.enum';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  getProducts(): Observable<Product[]> {
    const products = [
      this.availableProduct(1, 'Samsung fridge', 1500),
      this.availableProduct(2, 'LG fridge', 2000),
      this.availableProduct(3, 'Liebbher fridge', 1800),
      this.soldOutProduct(4),
    ];
    return Observable.interval(500)
    .map(i => products.slice(0, i + 1))
    .take(products.length);
  }

  getProduct(id: number) {
    return this.getProducts().map((products) =>
      products.find(product => product.id === id)
    );
  }

  private availableProduct(id: number, name: string, price: number) {
    const newProduct = new Product(id, name, price, Category.BigElectronics);
    newProduct.description = 'Really big fridge';
    newProduct.equivalents = ['LG fridge', 'Liebbher fridge'];
    newProduct.ingredients = ['doors', 'ice container', 'instruction'];
    return newProduct;
  }

  private soldOutProduct(id: number) {
    const newProduct = new Product(id, 'Harry Plotter', 25, Category.Books);
    newProduct.description = 'Very interesting story about young magical printer';
    newProduct.equivalents = ['Hobbit', 'Discworld'];
    newProduct.ingredients = ['magic', 'friendship', 'adventures'];
    newProduct.isAvailable = false;
    return newProduct;
  }

}
