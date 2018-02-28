import { Component, ViewChild, Inject, OnInit, Optional } from '@angular/core';

import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService, GeneratorService_L10, GeneratorServiceFactory } from './services/generator.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: GeneratorService_L10, useFactory: GeneratorServiceFactory(10) },
  ]
})
export class AppComponent implements OnInit {
  currentRandomString = '';
  pageUpdatedDate: Date;
  @ViewChild('notifications_outlet') notificationsOutlet: RouterOutlet;

  constructor(
    @Inject(GeneratorService_L10) @Optional() private generatorService: GeneratorService,
    @Optional() private optionsService: ConfigOptionsService,
    @Optional() private constantsService: ConstantsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.pageUpdatedDate = new Date();
    if (this.constantsService) {
      console.log('loaded application: ' + this.constantsService.CONSTANTS.app + ' version ' + this.constantsService.CONSTANTS.ver);
    } else {
      console.log('ConstantsService not found!');
    }
    if (!this.optionsService) {
      console.log('ConfigOptionsService not found!');
    }
    if (!this.generatorService) {
      console.log('GeneratorService not found!');
    }
  }

  notificationsClicked() {
    if (this.notificationsOutlet.isActivated) {
      this.router.navigate([{outlets: {notifications: null}}]);
    }
  }

  onGenerateNewString() {
    if (this.generatorService != null) {
      this.currentRandomString = this.generatorService.generateString();
    }
  }

  get appTitle() {
    if (this.optionsService) {
      return this.optionsService.getAppTitle();
    }
  }

  get login() {
    if (this.optionsService) {
      return this.optionsService.getLogin();
    }
  }

  get email() {
    if (this.optionsService) {
      return this.optionsService.getEmail();
    }
  }

  get totalCartItems() {
    return this.cartService.getTotalItems();
  }
}
