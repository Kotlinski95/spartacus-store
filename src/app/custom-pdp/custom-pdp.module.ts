import { CmsConfig } from '@spartacus/core';
import { ConfigModule } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { IconModule, StarRatingModule } from '@spartacus/storefront';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { Action } from 'rxjs/internal/scheduler/Action';



@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CustomProductSummaryComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent,
        }
      }
    } as CmsConfig)
  ]
})
export class CustomPdpModule { }
