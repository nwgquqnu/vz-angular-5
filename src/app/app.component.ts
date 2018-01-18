import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cartService: CartService) { }

  get isSomethingInCart() {
    return this.cartService.getProducts().length > 0;
  }
}
