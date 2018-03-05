import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification/notification.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DialogService } from './services/dialog.service';
import { CanDeactivateGuard, ProductResolveGuard } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationComponent, OrderByPipe],
  exports: [NotificationComponent, OrderByPipe],
  providers: [DialogService, CanDeactivateGuard, ProductResolveGuard]
})
export class SharedModule { }
