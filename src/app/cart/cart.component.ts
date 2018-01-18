import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  get cartProducts() {
    return this.cartService.getProducts();
  }

  onRemoveFromCart(product: Product) {
    this.cartService.removeProduct(product);
  }

}
