import {
  CmsConfig,
  I18nConfig,
  I18nModule,
  provideConfig,
} from '@spartacus/core';
import { ConfigModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { IconModule, StarRatingModule } from '@spartacus/storefront';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {customConfig ,customTranslations } from 'src/locales'
@NgModule({
  declarations: [CustomProductIntroComponent, CustomProductSummaryComponent],
  imports: [
    CommonModule,
    StarRatingModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent,
        },
      },
    } as CmsConfig),
  ],
  providers: [
    provideConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
      },
    }),
    provideConfig({
      i18n: {
        resources: customTranslations,
        chunks: customConfig,
      }
    }),
  ]
})
export class CustomPdpModule {}
