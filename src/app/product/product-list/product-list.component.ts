import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]> = Observable.empty();
  selectedId: number;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products$ = this.route.paramMap.switchMap((params) => {
      this.selectedId = +params.get('id');
      return this.productService.getProducts();
    });
  }

  onBuy(product: Product) {
    console.log(`product ${product.name} is bought`);
    this.cartService.addProduct(product);
  }

  onReloadData() {
    this.products$ = this.productService.getProducts();
  }

}
