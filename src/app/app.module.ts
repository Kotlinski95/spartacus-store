import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { CustomAddToCartButtonComponent } from './custom/custom-add-to-cart-button/custom-add-to-cart-button.component';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { CustomPageBestsellersModule } from './custom-page-bestsellers/custom-page-bestsellers.module';
import { CmsConfig, provideConfig } from '@spartacus/core';


@NgModule({
  declarations: [
    AppComponent,
    // CustomAddToCartButtonComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserTransferStateModule,
    CustomLayoutModule,
    CustomPageBestsellersModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        CustomAddToCartModule: {
          module: () =>
            import('./custom-add-to-cart/custom-add-to-cart.module').then(
              (m) => m.CustomAddToCartModule
            ),
          cmsComponents: ['ProductAddToCartComponent'],
        },
        CustomPdpModule: {
          module: () =>
            import('./custom-pdp/custom-pdp.module').then(
              (m) => m.CustomPdpModule
            ),
          cmsComponents: ['ProductSummaryComponent'],
        },
      },
    }),
    // provideConfig(<CmsConfig>{
    //   cmsComponents: {
    //     CustomAddToCartButtonComponent: {
    //       component: () => import('./custom/custom-add-to-cart-button/custom-add-to-cart-button.component').then(m => m.CustomAddToCartButtonComponent),
    //       data: {
    //         inventoryDisplay: false,
    //       },
    //     },
    //   },
    // }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
