import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]> = Observable.empty();
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  onBuy(product: Product) {
    console.log(`product ${product.name} is bought`);
    this.cartService.addProduct(product);
  }

  onReloadData() {
    this.products$ = this.productService.getProducts();
  }

}
