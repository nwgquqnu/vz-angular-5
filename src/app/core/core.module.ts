import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services';
import { LoginComponent, PageNotFoundComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, PageNotFoundComponent],
  providers: [AuthGuard, AuthService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
 }
