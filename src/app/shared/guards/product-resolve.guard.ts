import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Product } from './../../models/product.model';
import { ProductService } from './../../services/product.service';

@Injectable()
export class ProductResolveGuard implements Resolve<Product> {

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> | null {
    console.log('ProductResolve Guard is called');
    const id = +route.paramMap.get('id');

    if (id) {
      return this.productService.getProduct(id)
      .pipe(
        catchError(() => {
          this.router.navigate([route.parent.url]);
          return of(null);
        })
      );
    } else {
      this.router.navigate([route.parent.url]);
      return of(null);
      // return of(new Product(null, '', ''));
    }
  }
}
