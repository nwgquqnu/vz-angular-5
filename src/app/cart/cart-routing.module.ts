import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent, CartNotificationComponent, CartItemsComponent, OrderComponent } from '.';
import { CanDeactivateGuard } from '../shared';

const cartRoutes: Routes = [
  {
    path: 'cart',
    component: CartItemsComponent,
    children: [
      {
        path: 'order',
        component: OrderComponent,
        canDeactivate: [CanDeactivateGuard],
      },
      {
        path: '',
        component: CartListComponent,
        data: { title: 'Cart' }
      },
    ]
  },
  { path: 'cart', component: CartNotificationComponent, outlet: 'notifications'},
];


export let cartRouterComponents = [ CartListComponent, CartNotificationComponent, CartItemsComponent, OrderComponent ];

@NgModule({
  imports: [
    RouterModule.forChild(cartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
