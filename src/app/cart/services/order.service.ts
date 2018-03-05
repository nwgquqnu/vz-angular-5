import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { Order } from '../models/order.model';

const ordersList: Array<Order> = [];

const ordersObservable: Observable<Array<Order>> = of(ordersList);

@Injectable()
export class OrderService {
  getOrders(): Observable<Order[]> {
    return ordersObservable;
  }

  getOrder(id: number | string): Observable<Order> {
    return this.getOrders()
      .pipe(
        map((orders: Array<Order>) => orders.find(order => order.id === +id)),
        catchError(err => Observable.throw('Error in getOrder method'))
      );
  }

  addOrder(order: Order): void {
    order.id = ordersList.length;
    ordersList.push(order);
  }

  updateOrder(order: Order): void {
    const i = ordersList.findIndex(o => o.id === order.id);

    if (i > -1) {
      ordersList.splice(i, 1, order);
    }
  }
}
