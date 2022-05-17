import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  I18nConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig
} from '@spartacus/core';
import { ReactiveFormsModule } from '@angular/forms';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ItemCounterModule } from '@spartacus/storefront';
import {CustomAddToCartComponentComponent} from './custom-add-to-cart-component/custom-add-to-cart-component.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, I18nModule, ItemCounterModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductAddToCartComponent: {
          // component: () => import('./custom-add-to-cart-component/custom-add-to-cart-component.component').then(m => m.CustomAddToCartComponentComponent),
          component: CustomAddToCartComponentComponent,
          data: {
            inventoryDisplay: false,
          },
        },
      },
    }),
    provideConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
      },
    }),
  ],
  declarations: [CustomAddToCartComponentComponent],
  // exports: [CustomAddToCartComponentComponent],
})
export class CustomAddToCartModule {}
