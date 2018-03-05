import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { DialogService, CanComponentDeactivate } from './../../shared';
import { User } from './../models/user.model';
import { OrderService } from './../services/order.service';
import { CartItem } from '../../models/cart-item.model';
import { Order } from '../models/order.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  order: Order;
  originalOrder: Order;

  private subscription: Subscription;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.subscription = this.cartService.cartItemsChannel$.subscribe((next) => {
      this.order = new Order(null, new User(null, '', ''), next, this.cartService.getTotalSum());
      this.originalOrder = {...this.order};
      this.originalOrder.user = {...this.order.user};
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  saveOrder() {
    const order = {...this.order};

    if (order.id) {
      this.orderService.updateOrder(order);
      this.router.navigate(['../..', {editedOrderID: order.id}], {relativeTo: this.route});
    } else {
      this.orderService.addOrder(order);
      this.goBack();
    }
    this.originalOrder = {...this.order};
    this.originalOrder.user = {...this.order.user};
    this.cartService.removeAllItems();
  }

  goBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = Object.keys(this.originalOrder.user).map(key => {
      if (this.originalOrder.user[key] === this.order.user[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }
}
