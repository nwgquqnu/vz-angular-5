import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductModule { }
