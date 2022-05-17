import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCartService, ConfigModule, RoutingConfig, PRODUCT_NORMALIZER } from '@spartacus/core';
import { MyActiveCartService } from './my-active-cart.service';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { MySearchBoxService } from './my-search-box.service';
import { ProductPrettyNameNormalizer } from './product-pretty-name.normalizer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({} as RoutingConfig)
  ],
  providers: [
    // overwrrites existings services
    { provide: ActiveCartService, useClass: MyActiveCartService },
    { provide: SearchBoxComponentService, useClass: MySearchBoxService },
    { provide: PRODUCT_NORMALIZER, useClass: ProductPrettyNameNormalizer, multi: true},
  ]
})
export class ServicesModule { }
 