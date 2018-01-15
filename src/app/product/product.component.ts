import { Component, Input, OnInit } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() private product: Product;

  constructor(
  ) { }

  get name() {
    return this.product.name;
  }

  get description() {
    return this.product.description;
  }

  get price() {
    return this.product.price;
  }

  get isAvailable() {
    return this.product.isAvailable;
  }

  get ingredients() {
    return this.product.ingredients;
  }
  get equivalents() {
    return this.product.equivalents;
  }
  get category() {
    return this.product.category;
  }

  ngOnInit() {
  }

}
