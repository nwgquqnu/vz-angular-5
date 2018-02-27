import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';

const cartRoutes: Routes = [
  { path: 'cart', component: CartNotificationComponent, outlet: 'notifications'},
  { path: 'cart', component: CartListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(cartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
