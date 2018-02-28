import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs/Subscription';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-notification',
  templateUrl: './cart-notification.component.html',
  styleUrls: ['./cart-notification.component.css']
})
export class CartNotificationComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  event: {type: string, item?: CartItem};

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(event => this.event = event);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
