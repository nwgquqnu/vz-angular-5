import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../cart/models/order.model';
import { User } from '../../cart/models/user.model';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {
  @Input() order: Order;

}
