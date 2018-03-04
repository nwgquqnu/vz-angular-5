import { Component, ViewChild, Inject, OnInit, Optional, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService, GeneratorService_L10, GeneratorServiceFactory } from './services/generator.service';
import { ActivatedRoute, Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CartService } from './services/cart.service';
// rxjs
import { Subscription } from 'rxjs/Subscription';
import { filter, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: GeneratorService_L10, useFactory: GeneratorServiceFactory(10) },
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  currentRandomString = '';
  pageUpdatedDate: Date;
  @ViewChild('notifications_outlet') notificationsOutlet: RouterOutlet;
  private sub: Subscription;

  constructor(
    @Inject(GeneratorService_L10) @Optional() private generatorService: GeneratorService,
    @Optional() private optionsService: ConfigOptionsService,
    @Optional() private constantsService: ConstantsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.setPageTitles();
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

  ngOnDestroy() {
    this.sub.unsubscribe();
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

  private setPageTitles() {
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(
         data => this.titleService.setTitle(data['title'])
      );
  }
}
