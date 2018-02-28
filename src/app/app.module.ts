import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { APP_CONFIG, myConfig } from './my-config';
import { ProductModule } from './product/product.module';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService, constantsService } from './services/constants.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_CONFIG, useValue: myConfig },
    { provide: ConstantsService, useValue: constantsService },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService },
  ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
