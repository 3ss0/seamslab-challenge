import { ErrorHandler, NgModule , Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {throwIfAlreadyLoaded} from './module-import-guard';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { GlobalErrorHandler } from '@core/helpers';
import {
  ServerErrorInterceptor,
  AuthInterceptor
} from '@core/interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
