import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  get products() {
    return this.productService.getProducts();
  }

  onBuy(product: Product) {
    console.log(`product ${product.name} is bought`);
    this.cartService.addProduct(product);
  }

  ngOnInit() {
  }

}
