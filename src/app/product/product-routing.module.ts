import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
