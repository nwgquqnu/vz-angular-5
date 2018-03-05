import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { FormsModule } from '@angular/forms';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    adminRouterComponents,
    ManageProductsComponent,
    ManageOrdersComponent,
    OrderViewComponent
  ]
})
export class AdminModule { }
