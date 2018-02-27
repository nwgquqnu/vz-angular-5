import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Category } from '../models/category.enum';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return [
      this.availableProduct(1),
      this.availableProduct(2, 'LG fridge'),
      this.availableProduct(3, 'Liebbher fridge'),
      this.soldOutProduct(4),
    ];
  }

  getProduct(id: number) {
    return Observable.of(this.getProducts().find((product) => product.id === id));
  }

  private availableProduct(id: number, name: string = 'Samsung fridge') {
    const newProduct = new Product(id, name, 1500, Category.BigElectronics);
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
