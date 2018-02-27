import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';

const cartRoutes: Routes = [
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
