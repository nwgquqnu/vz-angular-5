import { Injectable } from '@angular/core';

import { Category } from '../models/category.enum';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class ProductService {

  getProducts(): Observable<Product[]> {
    const products = [
      this.availableProduct('Samsung fridge', 1500),
      this.availableProduct('LG fridge', 2000),
      this.availableProduct('Liebbher fridge', 1800),
      this.soldOutProduct(),
    ];
    return Observable.interval(500)
    .map(i => products.slice(0, i + 1))
    .take(products.length);
  }

  private availableProduct(name: string, price: number) {
    const newProduct = new Product(name, price, Category.BigElectronics);
    newProduct.description = 'Really big fridge';
    newProduct.equivalents = ['LG fridge', 'Liebbher fridge'];
    newProduct.ingredients = ['doors', 'ice container', 'instruction'];
    return newProduct;
  }

  private soldOutProduct() {
    const newProduct = new Product('Harry Plotter', 25, Category.Books);
    newProduct.description = 'Very interesting story about young magical printer';
    newProduct.equivalents = ['Hobbit', 'Discworld'];
    newProduct.ingredients = ['magic', 'friendship', 'adventures'];
    newProduct.isAvailable = false;
    return newProduct;
  }

}
