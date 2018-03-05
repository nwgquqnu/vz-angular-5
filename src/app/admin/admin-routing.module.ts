import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent } from '.';
import { AuthGuard } from './../core/guards/auth.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { CanDeactivateGuard, ProductResolveGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'orders', component: ManageOrdersComponent, data: { title: 'View Orders' } },
          { path: 'products', component: ManageProductsComponent },
          { path: 'products/add', component: ProductFormComponent, data: { title: 'Add Product' } },
          {
            path: 'products/edit/:id',
            component: ProductFormComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              product: ProductResolveGuard
            },
            data: { title: 'Manage Product' }
           },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [
  AdminComponent,
   AdminDashboardComponent,
   ManageProductsComponent,
   ManageOrdersComponent,
   ProductFormComponent
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
