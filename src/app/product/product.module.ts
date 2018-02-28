import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductService } from '../services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ChangeColorDirective } from '../directives/change-color.directive';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductListComponent, ChangeColorDirective],
  exports: [ProductListComponent, ChangeColorDirective],
  providers: [ProductService]
})
export class ProductModule { }
