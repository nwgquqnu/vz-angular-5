import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

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

  get isSomethingInCart() {
    return this.cartService.getProducts().length > 0;
  }

}
