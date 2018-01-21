import { Injectable } from '@angular/core';

import { Category } from '../models/category.enum';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return [
      this.availableProduct(),
      this.availableProduct('LG fridge'),
      this.availableProduct('Liebbher fridge'),
      this.soldOutProduct(),
    ];
  }

  private availableProduct(name: string = 'Samsung fridge') {
    const newProduct = new Product(name, 32000, Category.BigElectronics);
    newProduct.description = 'Really big fridge';
    newProduct.equivalents = ['LG fridge', 'Liebbher fridge'];
    newProduct.ingredients = ['doors', 'ice container', 'instruction'];
    return newProduct;
  }

  private soldOutProduct() {
    const newProduct = new Product('Harry Plotter', 250, Category.Books);
    newProduct.description = 'Very interesting story about young magical printer';
    newProduct.equivalents = ['Hobbit', 'Discworld'];
    newProduct.ingredients = ['magic', 'friendship', 'adventures'];
    newProduct.isAvailable = false;
    return newProduct;
  }

}
