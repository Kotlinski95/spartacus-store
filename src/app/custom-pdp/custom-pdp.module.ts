import {
  CmsConfig,
  I18nConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig
} from '@spartacus/core';
import { ConfigModule } from '@spartacus/core';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { IconModule, StarRatingModule, MediaModule, CarouselModule} from '@spartacus/storefront';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { customConfig ,customTranslations } from 'src/locales';
import { CustomProductImagesComponent } from './custom-product-images/custom-product-images.component';
import { CustomProductImagesZoomComponent } from './custom-product-images-zoom/custom-product-images-zoom.component';
import { CustomProductZoomTriggerComponent } from './custom-product-zoom-trigger/custom-product-zoom-trigger.component';
import { CustomProductZoomDialogComponent } from './custom-product-zoom-dialog/custom-product-zoom-dialog.component'

@NgModule({
  declarations: [CustomProductIntroComponent, CustomProductSummaryComponent, CustomProductImagesComponent, CustomProductImagesZoomComponent, CustomProductZoomTriggerComponent, CustomProductZoomDialogComponent],
  imports: [
    CommonModule,
    MediaModule,
    CarouselModule,
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
        ProductImagesComponent: {
          component: CustomProductImagesZoomComponent,
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
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CustomPdpModule {}
