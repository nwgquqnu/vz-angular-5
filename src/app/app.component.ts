import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('notifications_outlet') notificationsOutlet: RouterOutlet;
  cartItemsCount = 0;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.subscription = this.cartService.cartItemsChannel$.subscribe((next) => this.cartItemsCount = this.cartService.getTotalItems());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  notificationsClicked() {
    if (this.notificationsOutlet.isActivated) {
      this.router.navigate([{outlets: {notifications: null}}]);
    }
  }
}
