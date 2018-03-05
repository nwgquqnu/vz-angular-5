import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// rxjs
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap } from 'rxjs/operators';

import { Category } from '../../models/category.enum';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { DialogService } from '../../shared';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  private originalProduct: Product;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.product = new Product(null, '', null, Category.BigElectronics);
    this.route.data.subscribe(data => {
      this.product = {...data.product};
      this.originalProduct = {...data.product};
    });
  }

  saveProduct() {
    const product = {...this.product};

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.addProduct(product);
    }
    this.originalProduct = {...this.product};
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = Object.keys(this.originalProduct).map(key => {
      if (this.originalProduct[key] === this.product[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }

}
