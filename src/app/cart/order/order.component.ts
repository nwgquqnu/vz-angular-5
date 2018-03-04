import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: CartItem[];

  constructor() { }

  ngOnInit() {
  }

}
