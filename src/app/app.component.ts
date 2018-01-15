import { Component } from '@angular/core';
import { Product } from './product/product.model';
import { Category } from './product/category.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get availableProduct() {
    const newProduct = new Product('Samsung fridge', 32000, Category.BigElectronics);
    newProduct.description = 'Really big fridge';
    newProduct.equivalents = ['LG fridge', 'Libbherr fridge'];
    newProduct.ingredients = ['doors', 'ice container', 'instruction'];
    return newProduct;
  }

  get soldOutProduct() {
    const newProduct = new Product('Harry Plotter', 250, Category.Books);
    newProduct.description = 'Very interesting story about young magical printer';
    newProduct.equivalents = ['Hobbit', 'Discworld'];
    newProduct.ingredients = ['magic', 'friendship', 'adventures'];
    newProduct.isAvailable = false;
    return newProduct;
  }
}
